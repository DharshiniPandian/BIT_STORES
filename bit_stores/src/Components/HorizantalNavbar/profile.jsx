import React from 'react';
import Image from '../../assets/profile.jpg';
const Profile = () => {
    return (
        <div className="profile">
            <img src={Image} alt="Profile" className='profile-1' />
        </div>
    );
};

export default Profile;