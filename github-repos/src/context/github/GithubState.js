import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USER,
  SET_LOADING
} from '../types';
import AlertContext from '../Alert/alertContext';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const { setAlert } = useContext(AlertContext);
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //SEARCH USERS
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    if (res.data.total_count === 0) {
      return setAlert('Not found any user with the given username', 'danger');
    }
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  //GET USER
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  //GET REPOS
  const getRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secrete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };
  //CLEAR USER
  const clearUsers = () => dispatch({ type: CLEAR_USER });
  //SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getRepos,
        clearUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
