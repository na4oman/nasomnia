import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {data.map(item => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.item}
            key={item._id}
          >
            <div className={styles.imgContainer}>
              <Image src={item.img} alt='' fill={true} className={styles.img} />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <span className={styles.user}>{item.username}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
