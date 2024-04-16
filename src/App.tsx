import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/item/:id' element={<ItemPage />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  )
}

export default App
