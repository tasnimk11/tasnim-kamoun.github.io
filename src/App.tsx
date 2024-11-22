import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayouts from './layouts/MainLayout';

function App() {
  return (
    <MainLayouts>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </MainLayouts>
  );
}

export default App;
