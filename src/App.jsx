import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import PersonList from './pages/PersonList';
import AddPerson2 from './pages/AddPerson';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState([]);
  const [editId, setEditId] = useState(0);

const setBasicId = basicId => {
  setEditId(basicId);
}

  const listFromApi = () => {
    fetch("https://retoolapi.dev/X6h7DS/data", {headers: {"Accept": "application/json"}})    //https://retoolapi.dev/ggtvjc/people
        .then(async response => {
            const data = await response.json();                
          if (response.status === 200) {
              setPeople(data);
          } else if (response.status === 404) {
              console.log(response.status);
          } else {
              console.log(data.message);
          }
      });
  };


  return (
    <div>
      <header>
        <Navbar setBasicId={setBasicId}/>
      </header>
      <main>
        <PersonList listazas={listFromApi} people={people} personEdit={(person) => setEditId(person)}/>
        <AddPerson2 listazas={listFromApi} editId={editId} resetModositando={() => setEditId} setBasicId={setBasicId}/>
      </main>
    </div>
  );
}

export default App;


