import styles from "./Size.module.sass";
import { category } from '../../data/category'

export default function Size({ filterProducts, products, indexItem, state }) {

  return (
    <ul className={styles.catalog_list}>
      <li
        onClick={() => {
          filterProducts(false);
          indexItem(null);
        }}
        className={
          null === state
            ? `${styles.active} ${styles.catalog_list_item}`
            : styles.catalog_list_item
        }
      >
        Все
      </li>
      {category.map((item, index) => (
        <div key={index} className={styles.catalog_wrapper}>
          <li
            onClick={() => {
              filterProducts(item.value);
              indexItem(index);
            }}
            className={
              index === state
                ? `${styles.active} ${styles.catalog_list_item}`
                : styles.catalog_list_item
            }
          >
            <a>{`${item.value} ${item.key}`}</a>
          </li>
        </div>
      ))}
    </ul>
  );
}
