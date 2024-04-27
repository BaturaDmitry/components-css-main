import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { Theme } from '../Theme'
import { Button } from '../Button'

export const Header = (): JSX.Element => {
  const { t } = useTranslation()
  const [click, setClick] = useState<boolean>(false)
  const activeLink = 'active'

  const onClickIcon = (): void => {
    setClick(!click)
    document.body.classList.toggle('_lock')
  }
  const closeMobileMenu = (): void => {
    setClick(false)
    document.body.classList.remove('_lock')
  }

  return (
    <div className={styles.StyledHeader}>
      <div className={`${styles.HeaderContainer} ${click ? 'menu-open' : ''}`}>
        <NavLink className={styles.Logo} to="/" onClick={closeMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path
              fill="#5c62ec"
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            />
          </svg>
          <div className={styles.LogoTitle}>
            <span className={styles.FirstLetter}>{t('header.logo-title').charAt(0)}</span>
            {t('header.logo-title').substring(1)}
          </div>
        </NavLink>
        <Theme />
        <button className={styles.IconMenu} onClick={onClickIcon}>
          <span></span>
        </button>

        <nav className={`${styles.MenuBody} ${click ? 'menu-open' : ''}`}>
          <ul className={`${styles.MenuList} list`}>
            <li className="menu__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.MenuItem} ${activeLink}` : `${styles.MenuItem}`
                }
                to="/"
                onClick={closeMobileMenu}
              >
                {t('header.About')}
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.MenuItem} ${activeLink}` : `${styles.MenuItem}`
                }
                to="/projects"
                onClick={closeMobileMenu}
              >
                {t('header.projects')}
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.MenuItem} ${activeLink}` : `${styles.MenuItem}`
                }
                to="/contacts"
                onClick={closeMobileMenu}
              >
                {t('header.contacts')}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button
          modifier={styles.HeaderButton}
          link="https://github.com/kenform"
          icon="github"
          text={t('header.Button')}
        />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
