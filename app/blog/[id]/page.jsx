import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)

  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPage = async ({ params }) => {
  const item = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <div className={styles.userInfo}>
            <Image
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt=''
              width={40}
              height={40}
              className={styles.userImg}
            />
            <span className={styles.username}>{item.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt='' fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>{item.content}</div>
    </div>
  )
}

export default BlogPage
