import React from 'react'
import firebase from './Firebase'

function SpellInput({ spell }) {

    const [name, setName] = React.useState(spell.name)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('students').doc(spell.id).set({ ...spell, name })
    }


    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('students').doc(spell.id).delete()
        
    }

    return (
        <div>
            <input value={name} onChange={(e) => { setName(e.target.value); }} />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>

        </div>
    )
}

export default SpellInput
