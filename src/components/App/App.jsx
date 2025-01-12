import Profile from '../Profile/Profile.jsx'
import './App.module.css'
import userData from "../../userData.json"
import friends from "../../friends.json"
import FriendList from '../FriendList/FriendList.jsx'

function App() {
  
  return (
    <>
      <div>
        <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>

        <FriendList friends={friends}/>
      </div>
    </>
  )
}

export default App
