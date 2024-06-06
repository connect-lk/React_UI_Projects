
import './App.css'
import Navbar from './Components/Navbar'
import Post from './Components/Post'
import Rightbar from './Components/Rightbar'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
      <Navbar/>
      <div className="Container">
        <div className="Side_bar">
            <Sidebar/>
        </div>
        <div className="post_section">
          <Post/>
        </div>
        <div className="right_bar">
          <Rightbar/>
        </div>
      </div>
    </>
  )
}

export default App
