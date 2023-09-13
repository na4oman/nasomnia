'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
// import { getServerSession } from "next-auth/next"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: 'no-store',
  //     })

  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const fetchedData = await res.json()

  //     setData(fetchedData)
  //     setIsLoading(false)
  //   }

  //   getData()
  // }, [])

  const session = useSession()
  // const session = await getServerSession(req, res, authOptions)
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user.name}`,
    fetcher
  )

  console.log(session)
  console.log(data)

  const handleSubmit = async e => {
    e.preventDefault()

    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async id => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? 'loading...'
          : data.length === 0
          ? 'No posts yet'
          : data.map(post => (
              <Link href={`/blog/${post._id}`} key={post._id}>
                <div className={styles.post}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      alt=''
                      // width={200}
                      // height={100}
                      fill={true}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.title}>{post.title}</div>
                  <span
                    className={styles.button}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              </Link>
            ))}
      </div>
      <div className={styles.new}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input
            type='text'
            placeholder='Description'
            className={styles.input}
          />
          <input type='text' placeholder='Image src' className={styles.input} />
          <textarea
            placeholder='Content'
            cols='30'
            rows='10'
            className={styles.input}
          />
          <Button title='Send' />
        </form>
      </div>
    </div>
  )
}

export default Dashboard
