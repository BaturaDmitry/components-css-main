import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import anims from '../../utils/anims.module.css'
import { skills } from '../../constants/contants.js'
import animScroll from '../../utils/animScrolls'

export const Skills = (): JSX.Element => {
  const { t } = useTranslation()
  useEffect(() => {
    animScroll()
  }, [])
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div
          className={`${anims.AnimShowVertical} animItems`}
          style={{ transition: 'all 0.5s ease 0.05s' }}
        >
          <div className={styles.Title}>{t('section.skills.title')}</div>
        </div>
        <div
          className={`${anims.AnimShowVertical} animItems`}
          style={{ transition: 'all 0.5s ease 0.05s' }}
        >
          <div className={styles.Desc}>{t('section.skills.suptitle')}</div>
        </div>
        <div className={styles.SkillsContainer}>
          {skills.map((skill, i) => (
            <div className={`${anims.AnimShowHorizontal} ${styles.SkillWrapper} animItems`} key={i}>
              <div key={i} className={styles.Skill}>
                <h2 className={styles.SkillTitle}>{skill.title}</h2>
                <div className={styles.SkillList}>
                  {skill.skills.map((item, name) => (
                    <div className={`${anims.AnimShowHorizontal} animItems`} key={name}>
                      <div key={name} className={styles.SkillItem}>
                        <img className={styles.SkillImage} src={item.image} alt="skill image" />
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
