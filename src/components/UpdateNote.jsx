import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetEditing } from "../redux/features/notesSlice"

const UpdateNote = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.items)

    const onSubmitHandler = () => {
        // const findNote = notes.findIndex((item)=> item.id === updatedNote.id)
    }

    const closeUpdate = ()=>{
        dispatch(SetEditing(false))
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-center py-6 gap-4">
            <div className="w-60 flex flex-col gap-2">
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required
                    className="border p-2 rounded-xl" type="text" id="title" placeholder="Enter Updated title" />
            </div>
            <div className="w-60 flex flex-col gap-2">
                <label>Discription:</label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required
                    className="border p-2 rounded-xl" placeholder="Enter Updated Note" id="desc"></textarea>
            </div>
            <div className="flex w-60 gap-2 justify-between">
                <button className="cursor-pointer active:scale-95 border bg-blue-900 py-2 px-4 rounded-2xl">Update Note</button>
                <button onClick={()=> closeUpdate()} className="cursor-pointer active:scale-95 border bg-red-900 py-2 px-4 rounded-2xl">Close</button>
            </div>
        </form>
    )
}

export default UpdateNote