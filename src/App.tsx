import './App.css';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contact/contact';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/projects';
import { Stack } from './layout/sections/stack/stack';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
