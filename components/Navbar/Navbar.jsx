'use client'

import { nav_links } from '@/constants'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '../Button/Button'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()

  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        Nasomnia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {nav_links.map(link => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <Button title='Logout' onClick={signOut} style={styles.button} />
        )}
        {session.status === 'unauthenticated' && (
          <Link href='/dashboard/login' className={styles.login}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
