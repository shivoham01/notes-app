import { Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromSaved } from '../redux/features/savedSlice';
import { toast, Zoom } from 'react-toastify';

const PinnedNote = ({ note }) => {
    const dispatch = useDispatch()

    // Remove from pinned notes
    const removeSavedNoteFunc = (noteId) => {
        dispatch(removeFromSaved(noteId))
        toast.error('Removed from saved notes ✅', {
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
        <div id={note.id} className="note w-75 p-2 border rounded-lg bg-gray-900">
            <div className='flex justify-between'>
                <h2 className='pb-2'>{note.title}</h2>
                <div className='flex gap-2'>
                    <Trash onClick={() => removeSavedNoteFunc(note.id)} className='cursor-pointer' color="#ff0000" />
                </div>
            </div>
            <p className='text-sm'>{note.desc}</p>
        </div>
    )
}

export default PinnedNote