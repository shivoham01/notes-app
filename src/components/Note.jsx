import { Trash, BookmarkPlus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromNotes } from '../redux/features/notesSlice';
import { addToPinned } from '../redux/features/pinnedSlice';

const Note = ({ note }) => {
    const dispatch = useDispatch()

    // Remove notes function
    const removeNote = (noteId) => {
        dispatch(removeFromNotes(noteId))
    }

    // Add note to pinned notes
    const addToPinnedFunc = (note) => {
        dispatch(addToPinned(note))
    }

    return (
        <div id={note.id} className="note w-1/4 p-2 border rounded-lg bg-gray-900">
            <div className='flex justify-between'>
                <h2 className='pb-2'>{note.title}</h2>
                <div className='flex gap-2'>
                    <BookmarkPlus onClick={()=> addToPinnedFunc(note)} color="#00ff40" className='cursor-pointer' />
                    <Trash onClick={() => removeNote(note.id)} className='cursor-pointer' color="#ff0000" />
                </div>
            </div>
            <p className='text-sm'>{note.desc}</p>
        </div>
    )
}

export default Note