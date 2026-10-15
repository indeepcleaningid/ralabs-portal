import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import GtagTracker from './components/GtagTracker.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <GtagTracker />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
