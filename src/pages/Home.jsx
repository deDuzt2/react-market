import React from 'react';
import Card from "../components/Card/Card";


export default function Home({ items, searchValue, onChangeSearchInput, setSearchValue, addToCart, addToFavorites }) {
	return (

		<div className="content">
			<div className="content-top">
				{searchValue
					? <h1>Поиск по запросу: "{searchValue}"</h1>
					: <h1>Все кроссовки</h1>
				}
				<div className="search-block">
					<img src="img/card/search.svg" alt="search" />
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
					{searchValue
						&& <img
							onClick={() => setSearchValue('')}
							className="clear"
							src="img/card/delete-cart.svg"
							alt="clear"
						/>
					}
				</div>
			</div>
			<div className="cards">
				{
					items
						.filter((item) => item.name.toLowerCase().includes(searchValue))
						.map((item) => (
							<Card
								id={item.id}
								key={item.id}
								name={item.name}
								price={item.price}
								src={item.photo}
								favoriteFnc={(obj) => addToFavorites(obj)}
								plusFnc={(obj) => addToCart(obj)} />
						))}
			</div>
		</div>
	);
}
