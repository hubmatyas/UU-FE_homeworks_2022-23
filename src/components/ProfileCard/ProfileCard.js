import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
        <figure className="profile-pic">
            <img src={props.imgSrc} alt={"Profile pic of: " + props.name } />
        </figure>
        <div className="text">
            <h2>{"Lektor " + props.name}</h2>
            <p>{props.about}</p>
            <a href={'mailto:' + props.mail} className="button">Kontaktovat</a>
        </div>
    </div>
  )
}

export default ProfileCard