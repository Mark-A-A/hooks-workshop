import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'app/utils'
import LoggedIn from 'app/LoggedIn'
import LoggedOut from 'app/LoggedOut'


const useAuthenticateUser = function () {
  const [auth, setAuth] = useState(false)
  const [authAttempted, toggleAuthAttempted] = useState(false)

  useEffect(() => {
    toggleAuthAttempted(false)

    const authCB = (auth) => {
      toggleAuthAttempted(true)
      if (auth) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }

    const unsubscribe = onAuthStateChanged(authCB)
    return unsubscribe
  }, [])

  return {
    auth,
    authAttempted
  }
}

export default function App() {
  // const auth = null
  // const authAttempted = false
  const { auth, authAttempted } = useAuthenticateUser()
  // const [auth, setAuth] = useState(false)
  // const [authAttempted, toggleAuthAttempted] = useState(false)

  // useEffect(() => {
  //   toggleAuthAttempted(false)

  //   const authCB = (auth) => {
  //     toggleAuthAttempted(true)
  //     if (auth) {
  //       setAuth(true)
  //     } else {
  //       setAuth(false)
  //     }
  //   }

  //   const unsubscribe = onAuthStateChanged(authCB)
  //   return unsubscribe
  // }, [])

  

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}
