import React from 'react';

export const Drawer = ({ closeCart, cartItems, setCartItems, onRemove }) => {
	return (
		<div onClick={closeCart} className="overlay" >
			<div onClick={(e) => e.stopPropagation()} className="drawer">
				<h2>Корзина</h2>

				{cartItems.length > 0
					?
					<div className="cart-items">
						{cartItems.map((item) => (
							<div key={item.id} className="cart-item" >
								<div className="cart-photo-wrapper">
									<img className="cart-photo" src={item.src} alt="sneakers" />
								</div>
								<div>
									<p>{item.name}</p>
									<b>{item.price} р.</b>
								</div>
								<img onClick={() => onRemove(item.id)} className="remove-btn" src="img/card/delete-cart.svg" alt="delete" />
							</div>
						))}
					</div>
					: <div className='empty-cart'>
						<img src="img/cart.png" alt="cart" />
						<h3>Корзина пустая</h3>
						<span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
					</div>
				}
				{cartItems.length > 0
					? <div className="drawer-bottom">
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>21 498 руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<button className="green-button">Оформить заказ<img src="img/card/arrow.svg" alt="arrow" /></button>
					</div>
					: null
				}
			</div>
		</div >
	)
};
