import styles from '../styles/main.module.css'

const Main = props => (
    <div className={styles['component']}>
        {props.children}
    </div>
);

export default Main;