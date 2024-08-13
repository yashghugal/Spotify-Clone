import { useContext } from "react"
import Body from "./components/Body"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/Playercontext"

function App() {
  const {audioref,track} =useContext(PlayerContext)
  return (
    <>
     <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar/>
        <Body/>
      </div>
        <Player/>
        <audio ref={audioref} src={track.file} preload="auto"></audio>
     </div>

    </>
  )
}

export default App
