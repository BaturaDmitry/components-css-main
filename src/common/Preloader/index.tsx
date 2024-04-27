import styles from './styles.module.css'

type PreloaderProps = {
  className: string
}

export const Preloader = ({ className }: PreloaderProps): JSX.Element => {
  return (
    <div id="preloader" className={`${styles.Preloader} preloader ${className}`}>
      <span className="preloader__span1"></span>
      <span className="preloader__span2"></span>
      <span className="preloader__span3"></span>
      <span className="preloader__span4"></span>
    </div>
  )
}
