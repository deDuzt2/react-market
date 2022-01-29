import React, { useContext } from 'react';
import AppContext from '../context';

export const Info = ({ title, description, image }) => {
	const { setIsDrawerOpen } = useContext(AppContext);
	return (
		<div className='empty-cart'>
			<img src={image} alt="cart" />
			<h3>{title}</h3>
			<span>{description}</span>
			<button onClick={() => setIsDrawerOpen(false)} className="green_button">На главную<img src="img/card/arrow.svg" alt="arrow" /></button>
		</div>
	)
};
