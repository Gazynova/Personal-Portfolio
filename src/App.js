
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" index element={<About />} />
          <Route path="/Contact" index element={<Contact />} />
          <Route path="/Project" index element={<ProjectCard />} />
        </Route>

      </Routes>

    </>
  )
}

export default App;
