import React from 'react';
import classes from './MainBody.module.css';

const MainBody = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Main Content</h2>
      <p className={classes.content}>Add your desired content here</p>
    </div>
  );
};

export default MainBody;
