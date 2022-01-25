import React, { useState } from 'react';
import styles from './Card.module.scss';


export default function Card({ name, price, src, id, favoriteFnc, plusFnc, favorited = false }) {
	const [isPlus, setIsPlus] = useState(false);
	const [isFavorite, setIsFavorite] = useState(favorited);
	const onClickPlus = () => {
		plusFnc({ name, price, src, id });
		setIsPlus(!isPlus);
	};

	const onClickFavorite = () => {
		favoriteFnc({ name, price, src, id });
		setIsFavorite(!isFavorite);
	}


	return (
		<div className={styles.card}>
			<div onClick={onClickFavorite} className={styles.favorite}>
				{isFavorite
					? <img src="img/card/like-active.svg" alt="like-active." />
					: <img src="img/card/like-disable.svg" alt="like-disable." />
				}


			</div>
			<img width={133} height={112} className={styles.img_snkrs} src={src} alt="sneakers" />
			<div className={styles.snkrs_name}>{name}</div>
			<div className={styles.bottom_card}>
				<div className={styles.info_card}>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button>
					{isPlus
						? <img src="img/card/add-active.svg" alt="add-active" />
						: <img onClick={onClickPlus} src="img/card/add.svg" alt="add" />
					}
				</button>
			</div>
		</div>
	)
}
