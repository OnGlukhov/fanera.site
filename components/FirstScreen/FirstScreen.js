import styles from "./FirstScreen.module.sass";
import { Link } from "react-scroll";

export default function FirstScreen() {
  return (
    <section className={styles.firstScreen} id="main">
      <div className={styles.firstScreen_wrapper_block}>
        <div className={styles.firstScreen_block}>
          <div
            className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}
          ></div>

          <h1 className={styles.firstScreen_title}>
            <span className={styles.firstScreen_span}>Фанера</span> 
						<br></br>Высокое
            качество по доступной цене от 420 руб/шт
          </h1>
          <p className={styles.firstScreen_subtitle}>
            Один из самых востребованных, известных, но не теряющих популярность
            материалов на строительном рынке – это фанера. Производятся фанерные
            листы следующим образом: прессованный древесный шпон укладывается
            крест-накрест и проклеивается. Такое расположение создает полотну
            дополнительную прочность. Листы могут быть толщиной от 0,4 до 4 см,
            в зависимости от количества слоев.
          </p>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={300}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={300}
          >
            <button className={styles.firstScreen_button}>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </Link>
        </div>
      </div>

      {/* <div className={styles.over}></div> */}
      <div className={styles.firstScreen_wrapper}></div>
    </section>
  );
}
