import { useSelector } from 'react-redux'
import Note from './Note'

const NotesGrid = () => {
  const notes = useSelector((state) => state.notes.items)

  return (
    <div>
      <h1 className='px-4 text-lg py-6 font-bold text-yellow-500'>Your Notes :-</h1>
      <div className="notes flex flex-wrap gap-4 justify-center">
        {notes.length > 0 ?
          notes.map((note, idx) => {
            return <Note key={idx} note={note} />
          })
          : <p className='text-gray-600'>Please add your first note...</p>}
      </div>
    </div>
  )
}

export default NotesGrid