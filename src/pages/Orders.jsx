import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';



export default function Orders({ orderItems }) {
	return (
		<div className="content">
			<div className="content-top">
				{orderItems.length > 0
					? <div>
						<h1>Мои покупки</h1>
					</div>
					: <div className='empty-favorites'>
						<img width={70} height={70} src="img/emptyOrders.png" alt="empty" />
						<h3>У вас нет заказов</h3>
						<span>Оформите хотя бы один заказ.</span>
						<Link to="/"><button className="green_button">На главную<img src="img/card/arrow.svg" alt="arrow" /></button></Link>
					</div>
				}

			</div>
			<div className="cards">
				{orderItems.length > 0 &&
					orderItems.map((item) => (
						<Card
							id={item.id}
							key={item.key}
							name={item.name}
							price={item.price}
							src={item.src}
						/>
					))}
			</div>
		</div>
	);
}
