import Daniel from "./components/big-card-one"
import Patrick from "./components/big-card-two"
import Kira from "./components/long-card"
import Jonathan from "./components/small-card-one"
import Jeanette from "./components/small-card-two"

const App = () => {
  return (
    <div className='container mx-auto lg:py-40 py-20 px-4 lg:px-1 grid grid-rows-8 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 gap-4 font-sans'>
      <div className="row-span-6 col-span-1 lg:row-span-2 lg:col-span-3 grid grid-rows-6 grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 gap-4">
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