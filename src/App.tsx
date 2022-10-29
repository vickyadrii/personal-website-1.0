import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { MyThemeContextProvider } from "./context/MyThemeContext";

const HomePage = lazy(() => import("./pages/HomePage"));

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
        </Routes>
      </Router>
    </MyThemeContextProvider>
  );
}

export default App;
