import React from 'react'
import photo from "./assets/jsbsk.png"
import Login from './Login'

export default function Profile() {
    let isLoggedIn = false
    const user = {
        name: 'hamza',
        photo: photo,
        imageSize: 90
    }
  return (
    <>
    <h1>User info</h1>
    <div>
        {isLoggedIn ?
            (<div>
                 <p>{user.name}</p>
                <img 
                    src={user.photo}
                    alt={'photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }} />
            </div>)
            :
        <Login/>
        } 
    </div>
   
    </>

  )
}
