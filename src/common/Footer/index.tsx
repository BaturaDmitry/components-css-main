import styles from './styles.module.css'

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.Copyright}>
          <p>© 2023 Sergey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
