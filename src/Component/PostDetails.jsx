import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../actions/postActions';
import Loading from './Loading';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

import { UserIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postDetails = useSelector(state => state.post.postDetails);
  const comments = useSelector(state => state.post.comments);
  const loading = useSelector(state => state.post.loading);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h1 className="text-2xl font-semibold text-sky-950">{postDetails.title}</h1>
        <p className="text-gray-700 mt-4">{postDetails.body}</p>
      </div>
      <div className="mt-6">
      <div className="flex ">
      
        <span className="text-xl font-semibold text-sky-900"> Comments</span>
        <ChatBubbleLeftIcon className="h-5 w-5 mt-2 ml-2 text-sky-900" />
        </div>
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-4 shadow-md mt-4">
          <div className='flex'>
          <BookOpenIcon className="h-5 w-5 mt-1 mr-2 text-sky-900" />
            <p className="font-semibold text-sky-900"> {comment.name}</p>
            </div>
            <div className='flex'>
            <p className="text-gray-600 flex">{comment.body} <HeartIcon className="h-8 w-8  text-red-500"  />    </p>
           
            </div>
            <div className='flex'>
            <UserIcon className='h-5 w-5  text-gray-500 mt-2 text-sm  mr-2'/>
            <p className="text-gray-500 text-sm mt-2"> {comment.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
