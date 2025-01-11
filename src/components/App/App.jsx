import Profile from '../Profile/Profile.jsx'
import './App.module.css'
import userData from "../../userData.json"

function App() {
  
  return (
    <>
      <div>
        <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
      </div>
    </>
  )
}

export default App
