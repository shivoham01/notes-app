import { useSelector } from 'react-redux'
import PinnedNote from '../components/PinnedNote'

const PinnedNotes = () => {
  const pinnedNotes = useSelector((state) => state.pinnedNotes.items)

  return (
    <div>
      <h1 className='px-4 text-lg py-6 font-bold text-green-400 text-center my-5'>My Pinned Notes</h1>
      <div className="notes flex flex-wrap gap-4 justify-center">
        {pinnedNotes.length > 0 ?
          pinnedNotes.map((note, idx) => {
            return <PinnedNote key={idx} note={note} />
          })
          : <p className='text-gray-600'>Please add your first note...</p>}
      </div>
    </div>
  )
}

export default PinnedNotes