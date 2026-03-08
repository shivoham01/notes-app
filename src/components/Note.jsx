import { Trash, BookmarkPlus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromNotes } from '../redux/features/notesSlice';
import { addToPinned } from '../redux/features/pinnedSlice';
import { toast, Zoom } from 'react-toastify';

const Note = ({ note }) => {
    const dispatch = useDispatch()
    const pinnedNotes = useSelector(state => state.pinnedNotes.items)

    // Remove notes function
    const removeNote = (noteId) => {
        dispatch(removeFromNotes(noteId))
    }

    // Add note to pinned notes
    const addToPinnedFunc = (note) => {
        // If already added to pinned notes
        const alreadyExists = pinnedNotes.find((item) => item.id === note.id)
        if (alreadyExists) {
            return toast.error('Already added to pinned notes ✅', {
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
        dispatch(addToPinned(note))
        toast.success('Added to Pinned Notes ✅', {
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

    return (
        <div id={note.id} className="note w-1/4 p-2 border rounded-lg bg-gray-900">
            <div className='flex justify-between'>
                <h2 className='pb-2'>{note.title}</h2>
                <div className='flex gap-2'>
                    <BookmarkPlus onClick={() => addToPinnedFunc(note)} color="#00ff40" className='cursor-pointer' />
                    <Trash onClick={() => removeNote(note.id)} className='cursor-pointer' color="#ff0000" />
                </div>
            </div>
            <p className='text-sm'>{note.desc}</p>
        </div>
    )
}

export default Note