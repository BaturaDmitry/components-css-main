import styles from './styles.module.css'

interface Education {
  id: number
  img: string
  school: string
  date: string
  grade: string
  desc: string
  degree: string
}

interface EducationCardProps {
  education: Education
}

export const EducationCard = ({ education }: EducationCardProps): JSX.Element => {
  return (
    <div className={styles.Card}>
      <div className={styles.Top}>
        <img className={styles.Image} src={education.img} />
        <div className={styles.Body}>
          <div className={styles.Name}>{education.school}</div>
          <div className={styles.Degree}>{education.degree}</div>
          <div className={styles.Date}>{education.date}</div>
        </div>
      </div>
      <div className={styles.Grade}>
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className={styles.Description}>
        <span className={styles.span}>{education.desc}</span>
      </div>
    </div>
  )
}
