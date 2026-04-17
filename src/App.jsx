import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import InternalGuidePage from './pages/InternalGuidePage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/guide" element={<InternalGuidePage />} />
      </Routes>
    </Layout>
  )
}

export default App