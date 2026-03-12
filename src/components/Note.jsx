import { Trash, BookmarkPlus, SquarePen } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromNotes, SetEditing } from '../redux/features/notesSlice';
import { adddToSaved } from '../redux/features/savedSlice';
import { toast, Zoom } from 'react-toastify';

const Note = ({ note }) => {
    const dispatch = useDispatch()
    const savedNotes = useSelector(state => state.savedNotes.items)

    // Add note to saved notes
    const addToSavedFunc = (note) => {
        // If already added
        const alreadyExists = savedNotes.find((item) => item.id === note.id)
        if (alreadyExists) {
            return toast.error('Already added to saved notes ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }

        // Added to Pinned Notes
        dispatch(adddToSaved(note))
        toast.success('Added to Saved Notes ✅', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    }

    // Remove notes function
    const removeNote = (noteId) => {
        dispatch(removeFromNotes(noteId))
        toast.error('Removed from notes ✅', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    }

    // Edit notes function
    const editNoteFunc = (note) => {
        dispatch(SetEditing(true))
    }

    return (
        <div id={note.id} className="note p-2 m-2 border rounded-lg bg-gray-900 w-75">
            <div className='flex justify-between'>
                <h2 className='pb-2'>{note.title}</h2>
                <div className='flex gap-2'>
                    <BookmarkPlus onClick={() => addToSavedFunc(note)} color="#00ff40" className='cursor-pointer' />
                    <Trash onClick={() => removeNote(note.id)} className='cursor-pointer' color="#ff0000" />
                    <SquarePen onClick={() => editNoteFunc()} className='cursor-pointer' color="#00ff1e" />
                </div>
            </div>
            <p className='text-sm'>{note.desc}</p>
        </div>
    )
}

export default Note