import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return jokes ? (
    <>
      <h1>hello gyis app chl gyi {jokes.length}</h1>
     <ul>
     {jokes.map((item) => {
        return <li key={item.id}>
          {console.log(item)}
          <h3>{item.title}</h3>
          <h3>{item.content}</h3>
        </li>
      })}
     </ul>
    </>
  ):null
}

export default App
