'use client'

import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', { email, password })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='email'
          placeholder='email'
          required
        />
        <input
          className={styles.input}
          type='password'
          placeholder='password'
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <Button
        onClick={() => signIn('google')}
        title='Login with Google'
        style={styles.googleButton}
      />
    </div>
  )
}

export default Login
