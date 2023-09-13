'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Register = () => {
  const [err, setErr] = useState(null)
  const router = useRouter()
  const session = useSession()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created')
    } catch (error) {
      setErr(error)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          placeholder='username'
          required
        />
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
        <button type='submit' className={styles.button}>
          Register
        </button>
      </form>
      {err && 'Something went wrong!'}
      <Link href='/dashboard/login'>Login with an existing account</Link>
    </div>
  )
}

export default Register
