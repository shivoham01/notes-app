import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToNotes } from "../redux/features/notesSlice";
import { toast, Zoom } from 'react-toastify';

const AddNotes = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch()

    // On Submit Handler
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addToNotes({
            id: Date.now(),
            title,
            desc
        }))

        // Added to Notes
        toast.success('Added to Notes ✅', {
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

        setTitle("")
        setDesc("")
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-center py-6 gap-4">
            <div className="w-1/4 flex flex-col gap-2">
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required
                    className="border p-2 rounded-xl" type="text" id="title" placeholder="Enter note title" />
            </div>
            <div className="w-1/4 flex flex-col gap-2">
                <label>Discription:</label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required
                    className="border p-2 rounded-xl" placeholder="Enter Your Note" id="discription"></textarea>
            </div>
            <button className="cursor-pointer active:scale-95 border bg-blue-900 py-2 px-4 rounded-2xl">Add Note</button>
        </form>
    )
}

export default AddNotes