import React, { useState } from 'react'
import styles from "./Button.module.css"

export default function Button() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }
  return (
    <>  
        <h1>{count}</h1>
        <h2>you clicked {count} times</h2>
        <button onClick={handleClick} className={styles.btn}>Click me</button>
    </>
  )
}
