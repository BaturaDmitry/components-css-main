import { BrowserRouter as Router } from 'react-router-dom'

import Main from './pages/Main'

function App(): JSX.Element {
  return (
    <Router>
      <main>
        <Main />
      </main>
    </Router>
  )
}

export default App
