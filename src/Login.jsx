import React from 'react'

export default function Login() {
  return (
    <>
        <form>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='enter username'/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" placeholder='enter password'/>
            </div>
        </form>
    </>
  )
}
