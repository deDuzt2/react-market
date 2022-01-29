import React, { useContext, useState } from 'react';
import AppContext from '../../context';
import { Info } from '../Info';
import styles from './Drawer.module.scss'

export const Drawer = ({ closeCart, onRemove, addToOrders, isDrawerOpen }) => {
	const { cartItems, setCartItems } = useContext(AppContext);
	const [isOrder, setIsOrder] = useState(false);

	const clickOrder = () => {
		addToOrders(cartItems);
		setIsOrder(true);
		setCartItems([]);
	}

	return (
		<div onClick={closeCart} className={`${styles.overlay} ${isDrawerOpen ? styles.overlayVisible : ''}`} >
			<div onClick={(e) => e.stopPropagation()} className={styles.drawer}>
				<h2>Корзина</h2>

				{cartItems.length > 0
					?
					<div className={styles.cart_items}>
						{cartItems.filter((item) => item.state !== 'deleted').map((item) => (
							<div key={item.id} className={styles.cart_item} >
								<div className={styles.cart_photo_wrapper}>
									<img className={styles.cart_photo} src={item.src} alt="sneakers" />
								</div>
								<div>
									<p>{item.name}</p>
									<b>{item.price} р.</b>
								</div>
								<img onClick={() => onRemove(item)} className={styles.remove_btn} src="img/card/delete-cart.svg" alt="delete" />
							</div>
						))}
					</div>
					: <Info title={isOrder ? "Заказ оформлен!" : "Корзина пустая"}
						description={isOrder ? "Ваш заказ #18 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
						image={isOrder ? "img/order.png" : "img/cart.png"} />
				}
				{cartItems.length > 0
					? <div className={styles.drawer_bottom}>
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>{(cartItems.reduce((sum, obj) => obj.price + sum, 0) * 1.05).toFixed(2)} руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>{(cartItems.reduce((sum, obj) => obj.price + sum, 0) * 0.05).toFixed(2)} руб.</b>
							</li>
						</ul>
						<button onClick={clickOrder} className={`green_button ${styles.green_button}`} >Оформить заказ<img src="img/card/arrow.svg" alt="arrow" /></button>
					</div>
					: null
				}
			</div>
		</div >
	)
};
