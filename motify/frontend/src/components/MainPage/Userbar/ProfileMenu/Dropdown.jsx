import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toggleDropdown } from '../../../../store/uiReducer';
import * as sessionActions from '../../../../store/session';
import '../../MainPage.css'
// import { Link } from 'react-router-dom';


const Dropdown = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    await dispatch(sessionActions.logout())
    dispatch(toggleDropdown())
    history.push('/login');
  }

  return (
    <div className="userbar-profile-menu">
      <ul>
        <li><Link to='/'>Profile</Link></li>
        <li><Link to='/albums/1'>Album Show</Link></li>
        <li onClick={handleLogout}>Log out</li>
      </ul>
    </div>
  );
};

export default Dropdown;
