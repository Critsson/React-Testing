import { SkillsProps } from './skills.types'
import React from 'react'

export default function Skills(props: SkillsProps) {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const { skills } = props

  React.useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true)
    }, 500)
  }, [])

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {loggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
