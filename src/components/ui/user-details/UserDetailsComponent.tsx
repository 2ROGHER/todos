import React, { JSX } from 'react'
import "./UserDetails.scss";

const UserDetailsComponent = ({ u = { name: "roger", email: "roger@roger.com" } }): JSX.Element => {
  return (
    <section className='user-details'>
      <div className="perfil"></div>
      <div className='info-perfil'>
        <div>{u.name}</div>
        <div>{u.email}</div>
      </div>
    </section>
  )
}

export default UserDetailsComponent