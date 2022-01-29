import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import AppContext from '../context';


export default function Favorites({ addToFavorites, addToCart }) {
	const { favoritesItems } = useContext(AppContext);
	return (
		<div className="content">
			<div className="content-top">
				{favoritesItems.length > 0
					? <div>
						<h1>Мои закладки</h1>
					</div>
					: <div className='empty-favorites' >
						<img width={70} height={70} src="img/emptyfav.png" alt="empty" />
						<h3>Закладок нет :(</h3>
						<span>Вы ничего не добавляли в закладки</span>
						<Link to="/"><button className="green_button">На главную<img src="img/card/arrow.svg" alt="arrow" /></button></Link>
					</div>
				}

			</div>
			<div className="cards">
				{favoritesItems.length > 0 &&
					favoritesItems.map((item) => (
						<Card
							id={item.id}
							key={item.key}
							name={item.name}
							price={item.price}
							src={item.src}
							favoriteFnc={addToFavorites}
							plusFnc={addToCart}
						/>
					))}
			</div>


		</div>
	);
}
