import { useState } from 'react'
import { ReactSVG as SVG } from 'react-svg'
import { changeLanguage } from 'src/i18n'
import styles from './styles.module.css'

export const locales = {
  en: { title: 'en' },
  ru: { title: 'ru' },
}

export const LanguageSwitcher = (): JSX.Element => {
  const i18Value = localStorage.getItem('i18nextLng')
  const [language, setLanguage] = useState(i18Value ? i18Value : 'ru')
  const localesKeys = Object.keys(locales)
  const nextLanguageIndex = (localesKeys.indexOf(language) + 1) % localesKeys.length
  const nextLanguage = localesKeys[nextLanguageIndex]

  return (
    <div className={styles.LanguageSwitcherContainer}>
      <button onClick={() => changeLanguage(nextLanguage, setLanguage)}>
        <SVG src={`../icons/language.svg`} />
        <span className={styles.LanguageText}>{language}</span>
      </button>
    </div>
  )
}
