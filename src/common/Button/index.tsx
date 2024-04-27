import { ReactSVG as SVG } from 'react-svg'
import styles from './styles.module.css'

interface ButtonProps {
  link: string
  icon: string
  text: string
  modifier: string
}

export const Button = ({ modifier, link, icon, text }: ButtonProps): JSX.Element => {
  return (
    <a className={`${styles.ButtonStyled} ${modifier}`} href={link} target="new">
      <SVG src={`../icons/${icon}.svg`} />
      <span>{text}</span>
    </a>
  )
}
