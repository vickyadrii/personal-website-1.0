import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { MyThemeContextProvider } from "./context/MyThemeContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

function App() {
  return (
    <MyThemeContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Loading />}>
                <ProjectsPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </MyThemeContextProvider>
  );
}

export default App;
