import React from 'react'
import firebase from "./Firebase";

import SpellInput from "./SpellInput"

function App() {

  const [spells, setSpells] = React.useState([])
  const [newSpellName, setNewSpellName] = React.useState([])


  React.useEffect(()=>{
    const fetchData = async () =>{
        const db = firebase.firestore()
        const data = await db.collection("students").get()
        setSpells(data.docs.map(doc => ({...doc.data(), id:doc.id})))
    }
    fetchData()
  }, [])

  const onCreate = () =>{

    const db = firebase.firestore()
    db.collection('students').add({name: newSpellName})

  }

  return (
    <div>
      <ul>
      <input value={newSpellName} onChange={(e) => setNewSpellName(e.target.value)} />
      <button onClick={onCreate}>Create</button>
      {spells.map(spell => (
        <li key={spell.name}>
          <SpellInput spell={spell} />
        </li>
      ))}

      
    </ul>

    
    </div>
  )
}

export default App
