import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayouts from "./layouts/MainLayout";
import { ThemeModeProvider } from "./contexts/ThemeModeContext";

function App() {
  return (
    <ThemeModeProvider>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayouts>
    </ThemeModeProvider>
  );
}

export default App;
