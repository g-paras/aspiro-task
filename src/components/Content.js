import React from 'react';
import './Content.css';
import Traveller from './Traveller.png';

export const Content = () => {
  return (
    <div className="row" style={{ marginLeft: '50px', marginStart: "60px", textAlign: 'left' }}>
      <div className='col-5' style={{ marginTop: "120px" }} >
        <p style={{ color: "red", fontSize: '1.1em' }}>BEST DESTINATIONS AROUND THE WORLD</p>
        <h1 style={{ fontSize: '5em' }} ><b>Travel, enjoy
          and live a new
          and full life</b></h1>
        <div style={{ backgroundColor: 'rgb(240, 234, 234)', borderRadius: "10px" }}>
          <p style={{ fontSize: "1.4em", marginRight: "10px", marginLeft: '10px' }} >Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <p style={{ textAlign: "center" }}><button color='yellow'>find out more</button>
            <img style={{ marginTop: '10px', marginLeft: '15px' }} width="30px" height="40px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk5gzKL4CShbyE7sy68A4ALamIUSccQ2kdQ&usqp=CAU' alt="" />play now</p>
        </div>
      </div>
      <div className='col-7'>
        <img background-repeat='no-repeat' src={Traveller} alt="" />
      </div>

    </div>
  );
};
