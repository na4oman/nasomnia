import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; 2023 Nasomnia. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          src='/1.png'
          alt='facebook'
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src='/2.png'
          alt='instagram'
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src='/3.png'
          alt='tweeter'
          className={styles.icon}
          width={15}
          height={15}
        />
        <Image
          src='/4.png'
          alt='youtube'
          className={styles.icon}
          width={15}
          height={15}
        />
      </div>
    </footer>
  )
}

export default Footer
