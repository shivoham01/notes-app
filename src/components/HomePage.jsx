import { useSelector } from "react-redux"
import AddNotes from "./AddNotes"
import NotesGrid from "./NotesGrid"
import { useEffect } from "react"

const HomePage = () => {
    const notes = useSelector((state) => state.notes.items)
    const pinnedNotes = useSelector((state) => state.pinnedNotes.items)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
        localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes))
    }, [notes, pinnedNotes])

    return (
        <div>
            <AddNotes />
            <NotesGrid />
        </div>
    )
}

export default HomePage