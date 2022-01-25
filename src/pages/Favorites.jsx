import React from 'react';
import Card from '../components/Card/Card';


export default function Favorites({ items, addToFavorites, addToCart }) {
	console.log(items)
	return (
		<div className="content">
			<div className="content-top">
				{items.length > 0
					? <div>
						<h1>Мои закладки</h1>
					</div>
					: <div className='empty-favorites'>
						<img src="img/emptyfav.png" alt="empty" />
						<h3>Закладок нет :(</h3>
						<span>Вы ничего не добавляли в закладки</span>
					</div>
				}

			</div>
			<div className="cards">
				{items.length > 0 &&
					items.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							name={item.name}
							price={item.price}
							src={item.src}
							favorited={true}
							favoriteFnc={addToFavorites}
							plusFnc={addToCart}
						/>
					))}
			</div>


		</div>
	);
}
