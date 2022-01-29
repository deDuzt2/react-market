import React, { useContext } from 'react';
import Card from "../components/Card/Card";
import AppContext from '../context';


export default function Home({ searchValue, onChangeSearchInput, setSearchValue, addToCart, addToFavorites, isLoading }) {
	const { items } = useContext(AppContext);
	const loadArr = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 }, { key: 11 }, { key: 12 }]
	const renderItems = () => {
		return items
			.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
			.map((item) => (
				<Card
					id={item.id}
					key={item.id}
					name={item.name}
					price={item.price}
					src={item.src}
					favoriteFnc={(obj) => addToFavorites(obj)}
					plusFnc={(obj) => addToCart(obj)}
					isLoading={isLoading}
				/>
			))
	}

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
				{isLoading
					? loadArr.map((item) =>
						<Card
							key={item.key}
							isLoading={isLoading}
						/>
					)
					: renderItems()}
			</div>
		</div>
	);
}

