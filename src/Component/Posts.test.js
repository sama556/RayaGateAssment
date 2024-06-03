import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Posts from './Posts';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Posts Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      post: {
        posts: [],
        loading: false,
        error: null,
      },
    });
  });

  const renderComponent = (store, searchQuery = '') => {
    render(
      <Provider store={store}>
        <Posts searchQuery={searchQuery} />
      </Provider>
    );
  };

  test('displays no matching posts message when there are no posts', () => {
    renderComponent(store);
    expect(screen.getByText(/no matching posts found/i)).toBeInTheDocument();
  });
});

