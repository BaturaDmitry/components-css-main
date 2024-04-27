import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import { locales } from '../LanguageSwitcher'

interface ProjectCardsProps {
  project: {
    id: number
    title: string
    dateEng: string
    dateRu: string
    descriptionEng: string
    descriptionRu: string
    image: string
    tags: string[]
    category: string
    github: string
    webapp: string
  }
  openModal: { state: boolean; project: any }
  setOpenModal: (modal: { state: boolean; project: any }) => void
  key: number
}

export const ProjectCard = ({ project, setOpenModal }: ProjectCardsProps): JSX.Element => {
  const { i18n } = useTranslation()
  const engLanguage = locales['en'].title

  return (
    <div className={styles.Card} onClick={() => setOpenModal({ state: true, project: project })}>
      <img className={styles.Image} src={'./' + project.image} alt="project image" />
      <div className={styles.Tags}>
        {project.tags?.map((tag, index) => (
          <span className={styles.Tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.Details}>
        <div className={styles.Title}>{project.title}</div>
        <div className={styles.Date}>
          {i18n.resolvedLanguage === engLanguage ? project?.dateEng : project?.dateRu}
        </div>

        <div className={styles.Description}>
          {i18n.resolvedLanguage === engLanguage ? project?.descriptionEng : project?.descriptionRu}
        </div>
      </div>
    </div>
  )
}
