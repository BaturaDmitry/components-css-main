import styles from './styles.module.css'

interface Experience {
  id: number
  img: string
  role: string
  company: string
  date: string
  desc: string
  skills?: string[]
  doc?: string
}

interface ExperienceCardProps {
  experience: Experience
}

export const ExperienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  return (
    <div className={styles.Card}>
      <div className={styles.Top}>
        <img className={styles.Image} src={experience.img} />
        <div className={styles.Body}>
          <div className={styles.Role}>{experience.role}</div>
          <div className={styles.Company}>{experience.company}</div>
          <div className={styles.Date}>{experience.date}</div>
        </div>
      </div>
      <div className={styles.Description}>
        {experience?.desc && <span className={styles.span}>{experience?.desc}</span>}
        {experience?.skills && (
          <>
            <br />
            <div className={styles.Skills}>
              <b>Skills:</b>
              <div className={styles.ItemWrapper}>
                {experience?.skills?.map((skill, index) => (
                  <div className={styles.Skill} key={index}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <img className={styles.Document} src={experience.doc} />
        </a>
      )}
    </div>
  )
}
