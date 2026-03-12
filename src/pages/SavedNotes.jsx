import { useSelector } from 'react-redux'
import SavedNote from '../components/SavedNote'
import { useEffect } from 'react'

const SavedNotes = () => {
  const savedNotes = useSelector((state) => state.savedNotes.items)
  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(savedNotes))
  }, [savedNotes])

  return (
    <div>
      <h1 className='px-4 text-lg py-6 font-bold text-green-400 text-center my-5'>My Pinned Notes</h1>
      <div className="notes flex flex-wrap gap-4 justify-center">
        {savedNotes.length > 0 ?
          savedNotes.map((note, idx) => {
            return <SavedNote key={idx} note={note} />
          })
          : <p className='text-gray-600'>Please add your first note...</p>}
      </div>
    </div>
  )
}

export default SavedNotes