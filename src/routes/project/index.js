import { h } from 'preact'
import style from './style.css'

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ project }) => {
  return (
    <div className={style.project}>
      <h1>Project: {project.capitalize()}</h1>
    </div>
  )
}

export default Profile
