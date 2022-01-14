import styles from './Dropdown.module.sass'
import React, { useState } from 'react';
import { category } from '../../data/category'


export default function Dropdown({filterProducts, products, indexItem, state}){

	const [isActive, setIsActive] = useState(false)
	return (
		<div className={styles.dropdown}>
			<button onClick={() => setIsActive(!isActive)} className={styles.dropdown_button}>
				ВЫБРАТЬ
				<img className={isActive && styles.dropdown_img} src={'/images/arrow.svg'}></img>
			</button>
			<ul className={isActive? styles.dropdown_menu : styles.off}>
				<li 
					onClick={() => { filterProducts(false) 
						indexItem(null)
					}} 
				className={null === state? `${styles.dropdown_item} ${styles.active}` : `${styles.dropdown_item}`}>Все</li>
				{category.map((product, index) => (
					<li 
						onClick={() => {
							filterProducts(product.value)
							indexItem(index)
							setIsActive(!isActive)
						}}
						className={index === state? `${styles.dropdown_item} ${styles.active}` : `${styles.dropdown_item}`}
						key={index}><a >{`${product.value} ${product.key}`}</a></li>
				))}
			</ul>
			{isActive? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}

		</div>
	)

}