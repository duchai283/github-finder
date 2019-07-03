import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/alertContext';

const Search = () => {
  const { searchUsers, users, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (query === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(query.trim());
      setQuery('');
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={query}
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
