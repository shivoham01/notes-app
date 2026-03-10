import { Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromPinned } from '../redux/features/pinnedSlice';

const PinnedNote = ({ note }) => {
    const dispatch = useDispatch()

    // Remove from pinned notes
    const removePinnedNoteFunc = (noteId) => {
        dispatch(removeFromPinned(noteId))
    }

    return (
        <div id={note.id} className="note w-75 p-2 border rounded-lg bg-gray-900">
            <div className='flex justify-between'>
                <h2 className='pb-2'>{note.title}</h2>
                <div className='flex gap-2'>
                    <Trash onClick={() => removePinnedNoteFunc(note.id)} className='cursor-pointer' color="#ff0000" />
                </div>
            </div>
            <p className='text-sm'>{note.desc}</p>
        </div>
    )
}

export default PinnedNote