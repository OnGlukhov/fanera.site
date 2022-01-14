import styles from './Burger.module.sass'
import React from 'react'

export default function Burger() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.burger_icon}>
        <nav>
          <img src="images/icons8-menu.svg" />
        </nav>
      </div>
      <nav className={isActive? `${styles.burger} ${styles.active}` : `${styles.burger}` }>
        <ul className={styles.burger_list}>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#main'>ГЛАВНАЯ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#catalog'>ЦЕНЫ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#advantages'>ПРЕИМУЩЕСТВА</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#examples'>ПРИМЕНЕНИЕ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#contacts'>КОНТАКТЫ</a></li>
        </ul>
        <ul className={`${styles.burger_list} ${styles.margin}`}>
          <a onClick={() => setIsActive(!isActive)} className={styles.burger_list_tel} href={`tel:8 (800) 555-25-97`}>8 (800) 555-25-97</a>
          <p className={styles.burger_list_address}>Московская область, Одинцово, улица Молодежная, 46</p>
          <img className={styles.burger_list_logo} src='/images/logo-big.png' />
        </ul>

      </nav>
      {isActive? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
    </>

  )
}