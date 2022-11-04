import React from 'react';

const ReusableButton = (props) => {
 return (

  <section className='card_design'>
  <button className='cardbtn' variant="contained" onClick={props.onClick}>Learn More...</button>
  </section>

  )}
export default ReusableButton;