import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = cat => {
  const data = items[cat]

  if (data) return data

  return notFound()
}

const Category = ({ params: { category } }) => {
  const data = getData(category)
  // console.log(data)

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>
      <div className={styles.items}>
        {data.map(item => (
          <div className={styles.item} key={item.id}>
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.itemDesc}>{item.desc}</p>
              <Button title='See More' style={styles.button} />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt=''
                fill={true}
                className={styles.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
