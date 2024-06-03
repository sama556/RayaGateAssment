import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Loading from '../Component/Loading';
import Pagination from './Pagination';
import PostItem from './PostItem';

const Posts = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const postsState = useSelector(state => state.post);
  const { posts, loading, error } = postsState;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      {filteredPosts.length === 0 ? (
        <div className="text-center text-gray-500">No matching posts found.</div>
      ) : (
        <>
          <div className="grid gap-4">
            {currentPosts.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredPosts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Posts;
