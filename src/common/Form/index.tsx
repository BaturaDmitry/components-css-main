import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import Popup from 'reactjs-popup'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import anims from '../../utils/anims.module.css'

export const Form = (): JSX.Element => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const [popupOpen, setPopupOpen] = useState(false)
  const formErrors = errors.user_email ?? errors.user_name ?? errors.textarea
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    formErrors === undefined ? setPopupOpen(true) : setPopupOpen(false)
  }, [formErrors])

  const sendEmail = (): void => {
    if (formRef.current) {
      emailjs
        .sendForm('service_amgdxf9', 'template_29nxnxi', formRef.current, 'i2XvsVo2YJWLiCGao')
        .then(
          result => {
            console.error(result.text)
          },
          error => {
            console.error(error.text)
          }
        )
      reset()
    }
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <form
          className={styles.ContactForm}
          ref={formRef}
          onSubmit={handleSubmit(sendEmail)}
          action="#"
          name="form"
        >
          <div className={styles.ContactTitle}>{t('Form.title')}🚀</div>

          <input
            className={styles.ContactInput}
            {...register('user_email', {
              required: t('email.required'),
              pattern: {
                value: /^\S+@\S\S+$/i,
                message: t('email.message'),
              },
            })}
            placeholder={t('Form.placeholder-email')}
            name="user_email"
            id="email"
            type="mail"
          />

          {errors.user_email && typeof errors.user_email.message === 'string' && (
            <div style={{ color: 'red', marginTop: '-10px' }}>{errors.user_email.message}</div>
          )}

          <input
            className={styles.ContactInput}
            {...register('user_name', { required: t('name.required') })}
            placeholder={t('Form.placeholder-name')}
            type="text"
            name="user_name"
            id="name"
          />

          {errors.user_name && typeof errors.user_name.message === 'string' && (
            <div style={{ color: 'red', marginTop: '-10px' }}>{errors.user_name.message}</div>
          )}
          <textarea
            className={styles.ContactInputMessage}
            {...register('textarea', { required: t('message.required') })}
            placeholder={t('Form.placeholder-message')}
            rows={10}
            cols={30}
            name="textarea"
          />
          {errors.textarea && typeof errors.textarea.message === 'string' && (
            <div style={{ color: 'red', marginTop: '-10px' }}>{errors.textarea.message}</div>
          )}

          <Popup
            trigger={
              <button className={styles.ContactButton} id="button" type="submit">
                {t('Form.Button-submit')}
              </button>
            }
            modal
            closeOnDocumentClick
          >
            {popupOpen && (
              <div className={styles.PopupContent}>
                {t('Form.Button-sent')}
                <p></p>
                <div className={styles.PopupActions}>
                  <button
                    className={styles.ContactButton}
                    onClick={() => {
                      setPopupOpen(false)
                    }}
                  >
                    {t('Form.Button-close')}
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </form>
      </div>
    </div>
  )
}
