import styles from './Dropdown.module.sass'
import React, { useState } from 'react';
import { category } from '../../data/category'


export default function Dropdown({ filterProducts, products, indexItem, button, setButtonList, buttonList }) {

	const [isActive, setIsActive] = useState(false)
	// console.log(state)
	function resetButtonList(index) {
		if (button !== index) setButtonList('')
		else return
	}
	return (
		<div className={styles.dropdown}>
			{category.map((i, index) => (
				<div key={index} className={styles.dropdown_wrapper}>
					<button onClick={() => {
						setIsActive(!isActive)
						indexItem(index)
						resetButtonList(index)

					}} className={styles.dropdown_button}>
						{i.name}
						<img className={index === button && isActive ? styles.dropdown_img : ''} src={'/images/arrow.svg'}></img>
					</button>
					<ul className={index === button && isActive ? styles.dropdown_menu : styles.off}>
						{i.subcategory.map((product, index) => (
							<li key={index}
								onClick={() => {
									filterProducts(product)
									setButtonList(index)
									setIsActive(!isActive)
								}}
								className={index === buttonList ? `${styles.dropdown_item} ${styles.active}` : `${styles.dropdown_item}`}
							><a>{product}</a></li>
						))}
					</ul>
				</div>

			))}
			{isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}

		</div>
	)

}