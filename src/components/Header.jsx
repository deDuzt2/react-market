import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onClickCart }) {
	return (
		<header className="d-flex justify-between p-45">
			<Link to="/">
				<div className="header-left d-flex align-center">
					<img width={40} height={40} src="img/header/logo.png" alt="logo" />
					<div className="header-info">
						<h3>REACT SNEAKERS</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<div className="header-right d-flex align-center">
				<div onClick={onClickCart} className="header-buy d-flex align-center mr-30">
					<img className="mr-10" src="img/header/basket.svg" alt="basker" />
					<div className="price">1205 руб.</div>
				</div>
				<Link to="/favorites"><img className="mr-30" src="img/header/heart.svg" alt="heart" /></Link>
				<img src="img/header/user.svg" alt="user" />

			</div>
		</header>
	)
}
