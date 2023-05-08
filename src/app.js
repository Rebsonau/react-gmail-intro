import './styles/app.css'

import Header from './components/header'
import LeftNav from './components/left-nav'
import Main from './components/main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftNav />
      <Main />
    </div>
  )
}

export default App
