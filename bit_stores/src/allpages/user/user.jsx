import React from 'react';
import './user.css'
import Pic from '../../assets/pic.png';

const User = () => {
    return (
        <div className='user'>
          <button className='button'>Request Product<span className="plus">+</span></button>
           <div className='apex-card'>
            <img src={Pic} alt="photo" className="pic"></img>
            <h3>Apex 1234</h3>
            <h4>Monkey spanner</h4>
            <p>Task3456</p>
            <h5>M team</h5>
            <h6>1 to 4 steps completed</h6>
            <div className="progress-bar">
                    <div className="stage active"></div>
                    <div className="stage active"></div>
                    <div className="stage"></div>
                    <div className="stage"></div>
                </div>
           </div>
        </div>
    );
};

export default User;
