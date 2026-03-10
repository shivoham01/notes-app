import { useSelector } from "react-redux"
import AddNotes from "./AddNotes"
import NotesGrid from "./NotesGrid"
import { useEffect } from "react"

const HomePage = () => {
    const notes = useSelector((state) => state.notes.items)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <AddNotes />
            <NotesGrid />
        </div>
    )
}

export default HomePage