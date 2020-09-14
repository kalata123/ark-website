import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arkonea</title>
        <link rel="icon" href="/logo_ARKONEA_EOOD.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles['full-navbar']}>
        <div className={styles['navbar-contacts']}>
          <a>office@arkonea.bg </a>
          <a>+359 887 149583</a>
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
      <div className={styles.main}>
        <div className={styles['main-sidebar']}>
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
        <span className={styles['main-separatcor']}></span>
        <a>nqkuv tekst</a>
        <div>
          <a>Mnogo tekst</a>
        </div>
      </div>
      <div className={styles.footer}>

      </div>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
