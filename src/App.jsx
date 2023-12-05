import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, ModelingPage } from './pages';

import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="modeling"
            element={<ModelingPage />}
          />

        </Route>
      </Routes>

    </>
  )
}

export default App
