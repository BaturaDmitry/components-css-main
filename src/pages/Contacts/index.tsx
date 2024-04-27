import { useTranslation } from 'react-i18next'
import { Button, Form } from 'src/common'
import { useEffect } from 'react'
import styles from './styles.module.css'
import animScroll from '../../utils/animScrolls'
import anims from '../../utils/anims.module.css'

export const Contacts = (): JSX.Element => {
  const { t } = useTranslation()
  useEffect(() => {
    animScroll()
  }, [])
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>{t('section.contacts.title')}</div>
      <Form />
      <ul className={styles.SocialList}>
        <li>
          <Button
            link="https://www.google.com/"
            icon="telegram"
            text="Telegram"
            modifier={styles.SocialItem}
          />
        </li>
        <li>
          <Button
            link="https://www.google.com/"
            icon="linkedin"
            text="LinkedIn"
            modifier={styles.SocialItem}
          />
        </li>
      </ul>
    </div>
  )
}
