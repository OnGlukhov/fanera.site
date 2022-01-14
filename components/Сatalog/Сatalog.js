import styles from './Сatalog.module.sass'
import { products } from '../../data/products'
import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Size from '../Size/Size'

export default function Сatalog({width}) {
	const [productsFilter, setProductsFilter] = React.useState(products)
	const [state, setState] = React.useState(null)
	const indexItem = index => {
		setState(index)
	}
	
	const filterProducts = size => {
		if(!size) {
			return setProductsFilter(products)
		} else {
			setProductsFilter(products.filter(i => i.options.value === size))
		}
		
	} 
	return (
		<section className={styles.catalog} id='catalog'>
			<h1 className={styles.catalog_title}>
				Размеры и цены <span>ЦСП</span> плит
			</h1>
			<p className={styles.catalog_subtitle}>
				У нас представлены листы стандартного размера 2700 × 1250 мм и 3200 х
				1250, с толщиной ЦСП плиты от 8 до 24 мм.
			</p>
			<div className={styles.catalog_size}>
				{width < 769? <Dropdown filterProducts={filterProducts} products={products} indexItem={indexItem} state={state}/> :
				<Size filterProducts={filterProducts} products={products} indexItem={indexItem} state={state}/>}
				<div className={styles.catalog_line}></div>
				<div>

				</div>
			</div>
			<div className={styles.catalog_products}>
				{productsFilter.map((product, i) => (
				<div key={i} className={styles.catalog_product}>
					<img className={styles.catalog_product_img} src={`${product.img}`}/>
					<p className={styles.catalog_product_price}>{product.price.value} {product.price.key}</p>
					<p className={styles.catalog_product_size}>{product.title}</p>
					<div className={styles.overlay}></div>

				</div>
				))
				}

			</div>
		</section>
	)
}
