import styles from './Сatalog.module.sass'
import { products } from '../../data/products'
import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function Сatalog() {
	const [productsFilter, setProductsFilter] = React.useState(products.filter(i => i.subcategory === 'Сорт 2/4'))
	const [button, setButton] = React.useState(0)
	const [buttonList, setButtonList] = React.useState(0)
	const indexItem = index => {
		setButton(index)
	}

	const filterProducts = size => {
		if (!size) {
			return setProductsFilter(products.filter(i => i.subcategory === 'Сорт 2/4'))
		} else {
			setProductsFilter(products.filter(i => i.subcategory === size))
		}

	}
	return (
		<section className={styles.catalog} id='catalog'>
			<h1 className={styles.catalog_title}>
				Размеры и цены <span>ЦСП</span> плит
			</h1>
			<p className={styles.catalog_subtitle}>
				У нас представлены фанера разных размеров и производителей
			</p>
			<div className={styles.catalog_size}>
				<Dropdown
					filterProducts={filterProducts}
					products={products}
					indexItem={indexItem}
					button={button}
					buttonList={buttonList}
					setButtonList={setButtonList} />
				<div>

				</div>
			</div>
			<div className={styles.catalog_products}>
				{productsFilter.map((product, i) => (
					<div key={i} className={styles.catalog_product}>
						<img className={styles.catalog_product_img} src={`${product.img}`} />
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
