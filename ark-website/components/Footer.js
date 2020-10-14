import styles from "../styles/footer.module.css";

const Footer = (props) => (
  <div className={styles["component"]}>
    <div>
      <img
        className={styles["footer-logo"]}
        alt="Arkonea"
        src="/logo_ARKONEA_EOOD.png"
      />
    </div>
      <div className={styles["mid-higher"]}>
        <a>Технологични решения</a> 
        <span className={styles["lower-separator"]}></span>
        <a>Производствени системи</a> 
        <span className={styles["lower-separator"]}></span>
        <a>Дизайн</a>
      </div>
    <div className={styles["footer-mid"]}>
      <a>Уеб дизайн:	<strong>Арконеа ЕООД</strong></a>
      <a>© 2013 - 2018 Всички права запазени</a>
    </div>
  </div>
);

export default Footer;
