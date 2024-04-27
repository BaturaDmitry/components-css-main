import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './styles.module.css'
import { Home } from '../../pages/Home'
import { Header, Footer, Preloader, ProjectDetails } from '../../common'
import ScrollToTop from '../../utils/scrollToTop'
import { Projects } from '../Projects'
import { Contacts } from '../Contacts'

function Main(): JSX.Element {
  const [openModal, setOpenModal] = useState({ state: false, project: null })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fakeDataFetch = (): void => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
    fakeDataFetch()
  }, [])

  return (
    <>
      {isLoading ? (
        <Preloader className={isLoading ? '' : 'done'} />
      ) : (
        <div className={styles.Wrapper}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={<Projects openModal={openModal} setOpenModal={setOpenModal} />}
            />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Header />
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
          <Footer />
        </div>
      )}
    </>
  )
}

export default Main
