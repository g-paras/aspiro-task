import React from 'react';
import './Book.css';
import Book1 from './Book1.png';
import Book2 from './Book2.jpg';
import Book3 from './Book3.png';
import Book4 from './Book4.jpg';

export const Book = () => {
	return <div>
		<div className='row'>
			<div className='col-8'>
				<div className='row'>
					<div className='col-1'></div>
					<div className='col-11'><p style={{ textAlign: "left" }}>Easy and Fast</p>
						<h2 style={{ textAlign: "left", marginBottom: "20px" }}>Book your next trip in 3 easy steps</h2>
					</div>
				</div>
				<div className='row' style={{ marginBottom: "20px" }}>

					<div className='col-1'></div>

					<div className='col-2'>
						<img width='90%' height="60px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIvkIDG8U349fWIKoZXPI_xz4KPonVoUXA&usqp=CAU' alt=' ' />
					</div>
					<div className='col-9' style={{ backgroundColor: 'rgba(246, 246, 238, 0.685)' }}>

						<p style={{ textAlign: "left" }}><b>Choose Destinations</b><br />

							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
					</div>
				</div>
				<div className='row' style={{ marginBottom: "20px" }}>
					<div className='col-1'></div>
					<div className='col-2'>
						<img width='90%' height="60px" src='https://nhrec.org/cfaat/wp-content/uploads/2021/07/card-in-use.png' alt=' ' />
					</div>
					<div className='col-9' style={{ backgroundColor: 'rgba(246, 246, 238, 0.685)' }}>

						<p style={{ textAlign: "left" }}><b>Make Payment</b><br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
					</div>
				</div>
				<div className='row' style={{ marginBottom: "20px" }}>
					<div className='col-1'></div>
					<div className='col-2'>
						<img width='90%' height="60px" src={ Book1 } alt=' ' />
					</div>
					<div className='col-9' style={{ backgroundColor: 'rgba(246, 246, 238, 0.685)' }}>

						<p style={{ textAlign: "left" }}><b>Reach Airport on Selected Date</b><br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
					</div>
				</div>
			</div>
			<div className='col-4'>
				<img src={ Book2 } alt=""
				/>
				<p style={{ textAlign: 'left' }}><b>Trip To Greece</b></p>
				<p style={{ textAlign: 'left' }}>14-29 June by Robbin joseph</p>
				<div className='row'>
					<div className='col-6'>
						<img width="25px" height="25px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB5mEC41r58q-QXtJ4s0Uz4UN1CukqNtH5Q&usqp=CAU' alt=""/>
						<img width="25px" height="25px" src={ Book3 } alt="" />
						<img width="25px" height="25px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIvdKQBo9w_IBq-U3bzL_bdqIZRbqEXxp8A&usqp=CAU' alt=""/><br />

						<img width="30px" height="30px" src='https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png' alt="" />24 people going
					</div>
					<div className='col-6' style={{ backgroundColor: 'rgb(240, 234, 234)' }}>
						<div className='row'>
							<div className='col-3'>
								<img style={{ width: 60, height: 60, borderRadius: 60 / 2 }} src={ Book4 } alt="" />
							</div>
							<div className='col-9'>
								<p style={{ marginLeft: '5px' }}> Ongoing<br />
									Trip to Rome<br />
									40% completed<br />
									<div id="progressbar">
										<div></div>
									</div>
								</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div className="row" style={{ marginBlockStart: '80px', marginBlockEnd: '60px' }}  >
			<div className='col-2'></div>
			<div className='col-8' style={{ borderRadius: 60 / 3, backgroundColor: 'rgb(230, 221, 221)', marginBlockEnd: '20px' }}>
				<center><h2><b>Subscribe to get information, latest news and other<br />
					interesting offers about Cobham</b></h2>
					<form className='form' style={{ marginBlockStart: '20px', marginBlockEnd: '60px' }}>

						<input type="search" placeholder='email' style={{ height: "50px", width: "250px", borderRadius: "10px" }} />
						<button type="submit" >Subscribe</button>

					</form>
				</center>
			</div>

			<div className='col-2'></div>
		</div>
	</div>;

};
