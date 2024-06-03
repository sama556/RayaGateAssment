export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_DETAILS_SUCCESS = 'FETCH_POST_DETAILS_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const fetchPosts = () => async dispatch => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, error });
  }
};

export const fetchPostDetails = (postId) => async dispatch => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    dispatch({ type: FETCH_POST_DETAILS_SUCCESS, payload: data });

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const commentsData = await commentsResponse.json();
    dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: commentsData });
  } catch (error) {
    console.error("Failed to fetch post details:", error);
  }
};
