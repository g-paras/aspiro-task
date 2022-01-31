import React from 'react';
import './Offer.css'
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg'

export const Offer = () => {
    return <div style={{ marginBlockStart: '140px', marginBlockEnd: '40px' }}>
        <h1 style={{ textAlign: 'center' }}>We Offer Best Services</h1>
        <center>
            <div class="row" style={{ marginBlockStart: '30px' }}>

                <div class="col-1"></div>
                <div class="col-2">
                    <img height="140px" width=" 120px" src='https://atmega32-avr.com/wp-content/uploads/2018/10/DECODING-RUSSIAN-METEOR-M2-SATELLITE-IMAGES-IN-REAL-TIME.jpg' alt=' ' />
                    <h4>Calculated Weather </h4>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div class="col-1"></div>
                <div class="col-2">
                    <img height="140px" width=" 120px" src='https://t4.ftcdn.net/jpg/00/07/93/25/360_F_7932524_0YMnBEdnZB5aZ70ZDzV14ioQLLLJbnER.jpg' alt=' ' />
                    <h4>Best Flights</h4>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div class="col-1"></div>
                <div class="col-2">
                    <img height="140px" width=" 120px" src='https://static7.depositphotos.com/1000992/754/i/600/depositphotos_7543403-stock-photo-retro-microphone-isolated-on-white.jpg' alt=' ' />
                    <h4>Local Events</h4>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
                <div class="col-1"></div>
                <div class="col-2">
                    <img height="140px" width=" 120px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAoVLpckK5q-5j8dIOh0fP9rFbkd76y50IA&usqp=CAU' alt=' ' />
                    <h4>Customization</h4>
                    <p>We deliver outsourced aviation services for military customers</p>
                </div>

            </div>
        </center>
        <center>
            <h5 style={{ textAlign: 'center', marginBlockStart: '40px' }}>Top Selling</h5>
            <h1 style={{ textAlign: 'center' }}>Top Destinations</h1>
        </center>
        <center>
            <div class="row" >

                <div class="col-1"></div>
                <div class="col-3">
                    <img height="200px" width=" 300px" src={ Image2 } alt=' ' />
                    <div className='row'>
                        <div className='col-6'>
                            New Delhi, India

                        </div>
                        <div className='col-6'>
                            $5.3k
                        </div>
                    </div>
                    <p style={{ marginBlockStart: '15px', textAlign: 'left' }}>
                        <img style={{ marginBlockStart: '15px', textAlign: 'left', padding: '6px', height: "25px", width: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVV7v2hOCOdiRn-ftpd8oV5VQOwsUJkc9BothpRtN7pDbAMs7E1wgPIIQp7gXDcH0MdE&usqp=CAU" alt=" " />15days trip</p>
                </div>

                <div class="col-3">
                    <img height="200px" width=" 300px" src={ Image1 } alt=' ' />
                    <div className='row'>
                        <div className='col-6'>
                            Rome, Italy

                        </div>
                        <div className='col-6'>
                            $4.3k
                        </div>
                    </div>
                    <p style={{ marginBlockStart: '15px', textAlign: 'left' }}>
                        <img style={{ marginBlockStart: '15px', textAlign: 'left', padding: '6px', height: "25px", width: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVV7v2hOCOdiRn-ftpd8oV5VQOwsUJkc9BothpRtN7pDbAMs7E1wgPIIQp7gXDcH0MdE&usqp=CAU" alt=" " />10days trip</p>
                </div>

                <div class="col-3">
                    <img height="200px" width=" 300px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrCz7TqCFNF0g5OVyiyOuVRacF6oXEiwYvQ&usqp=CAU' alt=' ' />
                    <div className='row'>
                        <div className='col-6'>
                            London, UK

                        </div>
                        <div className='col-6'>
                            $6.3k
                        </div>
                    </div>
                    <p style={{ marginBlockStart: '15px', textAlign: 'left' }}>
                        <img style={{ marginBlockStart: '15px', textAlign: 'left', padding: '6px', height: "25px", width: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVV7v2hOCOdiRn-ftpd8oV5VQOwsUJkc9BothpRtN7pDbAMs7E1wgPIIQp7gXDcH0MdE&usqp=CAU" alt=" " />13days trip</p>

                </div>
                <div class="col-1"></div>
            </div>
        </center>


    </div>;
};
