import { useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import Image from './Intro__profile.png'
import anims from '../../utils/anims.module.css'
import animScroll from '../../utils/animScrolls'
import { Skills } from '../../common'

export const Home = (): JSX.Element => {
  const { t } = useTranslation()
  useEffect(() => {
    animScroll()
  }, [])
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.Section}>
        <div className={styles.Intro}>
          <div className={styles.IntroBody}>
            <h1 className={styles.IntroTitle}>
              {t('intro.title')}
              <br />
              <div className={styles.TypeWriterContainer}>
                {t('intro.IM')}
                <div className={styles.TypeWriterWrapper}>
                  <Typewriter
                    options={{
                      strings: [t('intro.typeWritter-programmer'), t('intro.typeWritter-frontend')],
                      autoStart: true,
                      loop: true,
                      delay: 120,
                    }}
                  />
                </div>
              </div>
            </h1>
            <div className={styles.IntroText}>
              <p>{t('intro.text')}</p>
            </div>
          </div>
          <img className={styles.IntroImage} src={Image} alt="" />
        </div>
      </div>
      <div className={styles.SectionSkills}>
        <Skills />
      </div>
    </div>
  )
}
