import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
      <div className={css.friendListItem}>
        <img className={css.animalPicture} src={avatar} alt={name} width="80" height="80" />
        <p className={css.friendName}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
  )
}

export default FriendListItem