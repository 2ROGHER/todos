import React, { JSX } from 'react'
import "./UserDetails.scss";

// 1. Create the [props] for this component.
interface UserDetailsProps {
  u?: {
    name: string;
    email: string;
  };
}

const UserDetailsComponent: React.FC<UserDetailsProps> = ({ u = { name: "roger", email: "roger@roger.com" } }): JSX.Element => {
  return (
    <section className='user-details'>
      <div className="perfil"></div>
      <div className='info-perfil'>
        <div className='name'>{u.name}</div>
        <div className='user'> {u.email}</div>
      </div>
    </section>
  )
}

export default UserDetailsComponent