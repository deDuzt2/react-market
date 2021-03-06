import React from 'react';
import ContentLoader from "react-content-loader"
import { useContext } from 'react/cjs/react.development';
import AppContext from '../../context';
import styles from './Card.module.scss';


export default function Card({ name, price, src, id, favoriteFnc, plusFnc, isLoading = false }) {
	const { isItemAdded, isFavorited } = useContext(AppContext);

	const onClickPlus = () => {
		plusFnc({ name, price, src, id });
	};
	const onClickFavorite = () => {
		favoriteFnc({ name, price, src, id });
	}


	return (
		<div className='column'>
			<div className={styles.card}>
				{
					isLoading
						?
						<ContentLoader
							speed={2}
							width={210}
							height={205}
							viewBox="0 0 150 187"
							backgroundColor="#f3f3f3"
							foregroundColor="#ecebeb"

						>
							<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
							<rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
							<rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
							<rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
							<rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
						</ContentLoader>
						:
						<div>
							{favoriteFnc &&
								<div onClick={onClickFavorite} className={styles.favorite}>
									{isFavorited(id)
										? <img src="img/card/like-active.svg" alt="like-active." />
										: <img src="img/card/like-disable.svg" alt="like-disable." />
									}
								</div>}

							<img width={133} height={112} className={styles.img_snkrs} src={src} alt="sneakers" />
							<div className={styles.snkrs_name}>{name}</div>
							<div className={styles.bottom_card}>
								<div className={styles.info_card}>
									<span>Цена:</span>
									<b>{price} руб.</b>
								</div>
								{
									plusFnc &&

									<button onClick={onClickPlus}>
										{isItemAdded(id)
											? <img src="img/card/add-active.svg" alt="add-active" />
											: <img src="img/card/add.svg" alt="add" />
										}
									</button>
								}
							</div>
						</div>
				}

			</div>
		</div>
	)
}
