import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogPostPage } from './pages/BlogPost';
import { ModalProvider } from './context/ModalContext';
import { BookDemoModal } from './components/BookDemoModal';

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer />
          <BookDemoModal />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
