import { CloseRounded, GitHub, LinkedIn, Visibility } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Modal } from '@mui/material'
import styles from './styles.module.css'

import { locales } from '../LanguageSwitcher'

interface Member {
  img: string
  name: string
  github: string
  linkedin: string
}

interface Project {
  image: string
  title: string
  date: string
  tags: string[]
  descriptionEng: string
  descriptionRu: string
  member: Member[]
  github?: string
  webapp?: string
}

interface ProjectDetailsProps {
  openModal: { state: boolean; project: Project | null }
  setOpenModal: (modal: { state: boolean; project: null }) => void
}

export const ProjectDetails = ({ openModal, setOpenModal }: ProjectDetailsProps): JSX.Element => {
  const project = openModal?.project
  const { t, i18n } = useTranslation()
  const engLanguage = locales['en'].title
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className={styles.Container}>
        {project && (
          <div className={styles.Wrapper}>
            <CloseRounded
              style={{
                position: 'absolute',
                top: '2px',
                right: '6px',
                cursor: 'pointer',
                width: '50px',
                height: '50px',
              }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
            <img className={styles.Image} src={project?.image} />
            <div className={styles.Title}>{project?.title}</div>
            <div className={styles.Date}>{project?.date}</div>
            <div className={styles.Tags}>
              {project?.tags.map(tag => (
                <div className={styles.Tag} key={tag}>
                  {tag}
                </div>
              ))}
            </div>

            <div className={styles.Desc}>
              {i18n.resolvedLanguage === engLanguage
                ? project?.descriptionEng
                : project?.descriptionRu}
            </div>

            {project.member && (
              <>
                <div className={styles.Label}>Members</div>
                <div className={styles.Members}>
                  {project.member.map(member => (
                    <div className={styles.Member} key={member.name}>
                      {' '}
                      <img className={styles.MemberImage} src={member.img} />
                      <div className={styles.MemberName}>{member.name}</div>
                      <a
                        href={member.github}
                        target="new"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <GitHub />
                      </a>
                      <a
                        href={member.linkedin}
                        target="new"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <LinkedIn />
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className={styles.ButtonGroup}>
              {project?.github && (
                <a className={styles.Button} href={project?.github} target="new">
                  <GitHub />
                  <p>
                    {t('section.projects.details.buttons.view-code1')}
                    <br />
                    <span>{t('section.projects.details.buttons.view-code2')}</span>
                  </p>
                </a>
              )}
              {project?.webapp && (
                <a className={styles.Button} href={project?.webapp} target="new">
                  <Visibility />
                  <p>
                    {t('section.projects.details.buttons.live-app1')}
                    <br />
                    <span> {t('section.projects.details.buttons.live-app2')}</span>
                  </p>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
