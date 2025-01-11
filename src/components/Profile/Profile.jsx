import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.mainInfo}>
    <img className={css.photoDummy}
      src={image}
      alt={name}
    />
      <p className={css.birthName}>{name}</p>
      <p className={css.tagText}>@{tag}</p>
      <p className={css.locationText}>{location}</p>
  </div>

  <ul className={css.statList}>
    <li className={css.statListItem}>
      <span className={css.statListTitle}>Followers</span>
      <span className={css.statsNumbers}>{stats.followers}</span>
    </li>
    <li className={css.statListItem}>
      <span className={css.statListTitle}>Views</span>
      <span className={css.statsNumbers}>{stats.views}</span>
    </li>
    <li className={css.statListItem}>
      <span className={css.statListTitle}>Likes</span>
      <span className={css.statsNumbers}>{stats.likes}</span>
    </li>
  </ul>
    </div>
  )
}

export default Profile