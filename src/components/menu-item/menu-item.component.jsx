import React from 'react';
import { withRouter } from 'react-router-dom';   //history,match and linkurl helps us to go to new page
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div 
        className='background-image' 
        style={{                             //just like we do in CSS we can use style tag and apply styling to that particular component
          backgroundImage: `url(${imageUrl})`   //for dynamic images 
      }} 
    />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);