import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: 'Nasomnia | Contact',
  description: 'This is the contact page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src='/contact.png'
              alt=''
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.item}>
          <form className={styles.form}>
            <input type='text' placeholder='name' className={styles.input} />
            <input type='email' placeholder='email' className={styles.input} />
            <textarea
              cols='30'
              rows='10'
              placeholder='message'
              className={styles.textarea}
            ></textarea>
          </form>
          <Button title='Send' />
        </div>
      </div>
    </div>
  )
}

export default Contact
