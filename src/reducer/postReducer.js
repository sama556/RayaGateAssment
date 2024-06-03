import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE, 
    FETCH_POST_DETAILS_SUCCESS, 
    FETCH_COMMENTS_SUCCESS 
  } from '../actions/postActions.js';
  
  const initialState = {
    loading: false,
    posts: [],
    postDetails: {},
    comments: [],
    error: ''
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      case FETCH_POST_DETAILS_SUCCESS:
        return {
          ...state,
          postDetails: action.payload
        };
      case FETCH_COMMENTS_SUCCESS:
        return {
          ...state,
          comments: action.payload
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  