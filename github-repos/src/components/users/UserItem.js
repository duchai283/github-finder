import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card-item">
      <img src={avatar_url} alt={login} className="card-item__avatar" />
      <p className="card-item__paragrah">{login}</p>
      <Link to={`/user/${login}`} className="card-item__btn">
        see more
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
