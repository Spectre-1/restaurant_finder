import React from 'react';
import classes from './MainBody.module.css';
import DataContainer from '../UI/Data_Container/Data_Container';


const MainBody = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Main Content</h2>
      <DataContainer data={data} />
      <p className={classes.content}>Add your desired content here</p>
    </div>
  );
};

export default MainBody;
