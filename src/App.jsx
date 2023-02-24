import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PersonList from './pages/PersonList';
import AddPerson from './pages/AddPerson';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <PersonList/>
        <AddPerson/>
      </main>
    </div>
  );
}

export default App;


// https://retoolapi.dev/ggtvjc/people