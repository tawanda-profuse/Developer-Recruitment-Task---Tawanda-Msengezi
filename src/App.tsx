import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import ScrollToTop from './shared/hooks/useScrollToTop'
import { ToastContainer, Bounce } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
      <ToastContainer
        position='top-right'
        pauseOnHover
        transition={Bounce}
        autoClose={5000}
        draggable
      />
    </BrowserRouter>
  )
}

export default App
