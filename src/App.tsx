import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;