import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from './components/NotFound'
import { projects } from './data/Dataprojects'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />

          {projects.map((project) => {
            return (
              <Route
                path={`/my-projects/${project.id}`}
                element={project.about}
              />
            )
          })}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
