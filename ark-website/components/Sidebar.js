import styles from '../styles/sidebar.module.css'

const Sidebar = props => (
    <div className={styles['sidebar']}>
        <div className={styles['sidebar-content']}>
            <a>Производствени системи</a>
            <a>Материали</a> 
            <a>Електроди и тел - цени</a>          
            <a>Böhler Welding</a>          
            <a>UTP Maintenance</a>          
            <a>Welding Alloys Group</a>          
            <a>Alunox Schweißtechnik</a>          
            <a>Оборудване</a>          
            <a>Заваръчно оборудване</a>          
            <a>Газово оборудване</a>          
            <a>ЛПС и принадлежности</a>          
            <a>Услуги</a>          
            <a>Обучение и внедряване</a>          
            <a>Инспекции и надзор</a>          
            <a>Графичен и уеб дизайн</a>          
            <a>Общи условия</a>        
        </div>
        <a>nqkuv tekst</a>
        <span className={styles['sidebar-separatcor']}></span>
        <a>nqkuv tekst</a>
        <div>
            <a>Mnogo tekst</a>
        </div>
    </div>
);

export default Sidebar;