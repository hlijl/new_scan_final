import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ResultPage } from "./pages/ResultPage";
import { Auth } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { AuthErrorPage } from "./pages/AuthErrorPage";
import { SearchPage } from "./pages/SearchPage";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ResultProvider } from "./context/resultProvider";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} />} />
        
    
        
        <Route element={isAuth ? <Outlet /> : <Navigate to="/auth" />}>
          <Route
            path="/search"
            element={
              <>
                <ResultProvider>
                  <SearchPage />
                </ResultProvider>
              </>
            }
          />
          <Route
            path="/result"
            element={
              <>
                <ResultProvider>
                  <ResultPage />
                </ResultProvider>
              </>
            }
          />
        </Route>
        <Route path="/error" element={<AuthErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
