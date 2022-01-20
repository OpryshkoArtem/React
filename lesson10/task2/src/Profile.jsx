import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, handleChange }) => {
  return (
    <div className="colunm">
      <UserForm userData={userData} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
