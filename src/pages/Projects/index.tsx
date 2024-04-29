import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import { projects } from '../../constants/contants'
import { ProjectCard } from '../../common'
import animScroll from '../../utils/animScrolls'
import anims from '../../utils/anims.module.css'

interface ProjectsProps {
  openModal: { state: boolean; project: null }
  setOpenModal: (modal: { state: boolean; project: null }) => void
}

export const Projects = ({ openModal, setOpenModal }: ProjectsProps): JSX.Element => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState('all')
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
          <div className={styles.Title}>{t('section.projects.title')}</div>
        </div>
        <div
          className={`${anims.AnimShowVertical} animItems`}
          style={{ transition: 'all 0.8s ease 0.1s' }}
        >
          <div className={styles.Desc}>{t('section.projects.suptitle')}</div>
        </div>
        <div
          className={`${anims.AnimShowVertical} animItems`}
          style={{ transition: 'all 0.8s ease 0.2s' }}
        >
          <div className={styles.ToggleButtonGroup}>
            {toggle === 'all' ? (
              <div className={styles.ToggleButton} onClick={() => setToggle('all')}>
                {t('section.projects.toggle-button.all')}
              </div>
            ) : (
              <div className={styles.ToggleButton} onClick={() => setToggle('all')}>
                {t('section.projects.toggle-button.all')}
              </div>
            )}

            {toggle === 'store' ? (
              <div className={styles.ToggleButton} onClick={() => setToggle('store')}>
                {t('section.projects.toggle-button.store')}
              </div>
            ) : (
              <div className={styles.ToggleButton} onClick={() => setToggle('store')}>
                {t('section.projects.toggle-button.store')}
              </div>
            )}
            {toggle === 'landing' ? (
              <div className={styles.ToggleButton} onClick={() => setToggle('landing')}>
                {t('section.projects.toggle-button.landing')}
              </div>
            ) : (
              <div className={styles.ToggleButton} onClick={() => setToggle('landing')}>
                {t('section.projects.toggle-button.landing')}
              </div>
            )}
            {toggle === 'other' ? (
              <div className={styles.ToggleButton} onClick={() => setToggle('other')}>
                {t('section.projects.toggle-button.others')}
              </div>
            ) : (
              <div className={styles.ToggleButton} onClick={() => setToggle('other')}>
                {t('section.projects.toggle-button.others')}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${anims.AnimShowVertical} animItems`}
        style={{ transition: 'all 0.8s ease 0.3s' }}
      >
        <div className={styles.CardContainer}>
          {toggle === 'all' &&
            projects.map((project, id) => (
              <ProjectCard
                key={id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter(item => item.category === toggle)
            .map((project, id) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
