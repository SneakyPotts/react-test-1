import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, ModelingPage } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/modeling"
            element={<ModelingPage />}
          />

        </Route>
      </Routes>

    </>
  )
}

export default App
