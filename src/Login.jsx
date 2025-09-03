import React, { useActionState } from 'react'

const initialState = {errorCount : 0}

async function loginUser (prevState, formData){
  const username = formData.get('username')
  const password = formData.get('password')
  await new Promise(res => setTimeout(res,1500))
  let newErrorCount = prevState.errorCount
  if(!username || !password){
    newErrorCount+=1
    if(newErrorCount >= 3){
      return {error: 'Too many attempts, try again later', errorCount: newErrorCount}
    }
    return {error: 'All fields are required', errorCount: newErrorCount}
  }
  return {success : true, username, errorCount: 0}
}

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginUser, initialState)

  const isLocked = state.errorCount >= 3
  return (
    <>
      <form action={formAction}>
        <div>
          <label htmlFor="username">Enter username</label>
          <input type="text" name='username' />
        </div>
        <div>
          <label htmlFor="password">Enter password</label>
          <input type="password" name='password' />
        </div>
        <button type='submit' disabled={isPending || isLocked}>Submit</button>
        {state.error && <div style={{color: 'red'}}>{state.error}</div>}
        {state.success && <div style={{color: 'green'}}>Welcome, {state.username} !</div>}
        {isPending && <div>Loading ...</div>}
        {state.errorCount > 0 && state.errorCount < 3 && 
        (<div style={{color: 'orange'}}>
          Failed attempts : {state.errorCount} out of 3
        </div>)}
      </form>
    </>
    
  )
}
