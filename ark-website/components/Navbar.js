import styles from '../styles/navbar.module.css'

const Navbar = props => (
    <div className={styles['full-navbar']}>
        <div className={styles['navbar-contacts']}>
            <a href="mailto:office@arkonea.bg">office@arkonea.bg </a>
            <a href="tel:+359-887149583">+359 887 149583</a>
        </div>
        <div className={styles["navbar"]}>
        <div className={styles['navbar-upper']}>
            <div>
            <img className={styles['upper-logo']} alt="Arkonea" src="/logo_ARKONEA_EOOD.png" />
            </div>
            <div>
            <img alt="Vlak" src="/vlak.png" className={styles['upper-vlak']} />
            </div>
            <div>
            <a>Технологични решения</a><br />
            <a>Производствени системи</a><br />
            <a>Дизайн</a>
            </div>
        </div>
        <div className={styles['navbar-lower']}>
            <a href="/">Начало</a>
            <span className={styles['lower-separator']}></span>
            <a href="/">Поръчки</a>
            <span className={styles['lower-separator']}></span>
            <a href="/">Библиотека</a>
            <span className={styles['lower-separator']}></span>
            <a href="/">Новини</a>
            <span className={styles['lower-separator']}></span>
            <a href="/">Контакти</a>
        </div>
        </div>
    </div>
);

export default Navbar;
    