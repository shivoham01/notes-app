import { useSelector } from "react-redux"
import AddNotes from "../components/AddNotes"
import NotesGrid from "../components/NotesGrid"
import { useEffect } from "react"
import UpdateNote from '../components/UpdateNote'

const HomePage = () => {
    const notes = useSelector((state) => state.notes.items)
    const editing = useSelector((state) => state.notes.editing)
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            {editing ? <UpdateNote /> :
                <AddNotes />
            }
            <NotesGrid />
        </div>
    )
}

export default HomePage