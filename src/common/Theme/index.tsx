import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, setTheme } from 'src/store/slices/settings'
import styles from './styles.module.css'
import Sun from './svg/sun.svg'
import Moon from './svg/moon.svg'

export const Theme = (): JSX.Element => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(selectTheme)

  const handleTheme = (): void => {
    if (currentTheme === 'dark') {
      dispatch(setTheme('light'))
      return
    }
    dispatch(setTheme('dark'))
  }

  return (
    <div className={styles.DarkMode}>
      <input
        className={`${styles.DarkModeInput} ${
          currentTheme === 'dark' ? styles.DarkModeInputActive : ''
        }`}
        type="checkbox"
        id="dark__mode-toggle"
        onChange={handleTheme}
      />
      <label className={styles.DarkModeLabel} htmlFor="dark__mode-toggle">
        <img className={styles.DarkModeSvg} src={Sun} alt="sun" />
        <img className={styles.DarkModeSvg} style={{ height: '16px' }} src={Moon} alt="moon" />
      </label>
    </div>
  )
}
