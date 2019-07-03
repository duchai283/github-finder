import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const UserDetail = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, getRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getRepos(match.params.username);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gits,
    hireable,
    company
  } = user;

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable :
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>
          )}
          <a href={html_url} className="btn btn-dark" style={{ marginTop: 25 }}>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <React.Fragment>
                  <strong>Username</strong> {login}
                </React.Fragment>
              )}
            </li>

            <li>
              {company && (
                <React.Fragment>
                  <strong>Company: </strong> {company}
                </React.Fragment>
              )}
            </li>
            <li>
              {blog && (
                <React.Fragment>
                  <strong>Website: </strong> {blog}
                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gits: {public_gits}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default UserDetail;
