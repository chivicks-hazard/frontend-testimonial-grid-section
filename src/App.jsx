import Daniel from "./components/big-card-one"
import Patrick from "./components/big-card-two"
import Kira from "./components/long-card"
import Jonathan from "./components/small-card-one"
import Jeanette from "./components/small-card-two"

const App = () => {
  return (
    <div className='container mx-auto py-40 grid grid-rows-2 grid-cols-4 gap-4 font-sans'>
      <div className="row-span-2 col-span-3 grid grid-rows-2 grid-cols-3 gap-4">
        <Daniel />
        <Jonathan />
        <Jeanette />
        <Patrick />
      </div>
      <Kira />
    </div>
  )
}

export default App