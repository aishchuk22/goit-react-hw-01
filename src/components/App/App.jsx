import Profile from '../Profile/Profile.jsx'
import './App.module.css'
import userData from "../../userData.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"
import FriendList from '../FriendList/FriendList.jsx'
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx'

function App() {
  
  return (
    <>
      <div>
        <Profile name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>

        <FriendList friends={friends} />
        <TransactionHistory items={transactions}/>
      </div>
    </>
  )
}

export default App
