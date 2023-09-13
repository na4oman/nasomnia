import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          fill={true}
          className={styles.img}
        />
        <div className={styles.titleContainer}>
          <h1>Digital Storytellers</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.item}>
          <div className={styles.title}>Who We Are?</div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            corrupti iste numquam alias accusantium quasi repellat hic adipisci
            impedit, cupiditate culpa ratione nobis at deserunt rem aut nesciunt
            asperiores dolor. Quo vitae consequuntur adipisci doloremque? Sed
            quo asperiores in.
            <br />
            <br />
            Expedita, tenetur, eveniet nam fugiat nisi eaque alias autem illo
            cupiditate corrupti culpa inventore doloremque animi veniam iure
            consequuntur velit sint? Eligendi quo porro id possimus repellendus,
            sed asperiores non vero eum impedit sit eius blanditiis, natus quia
            laudantium quos, nam aperiam. Iste numquam reiciendis, dolor
            distinctio ab voluptas commodi odit! Fuga ipsa aliquam saepe!
            <br />
            <br />
            Harum tempore culpa architecto, doloribus veniam voluptate a aperiam
            minima unde, maxime sequi, neque aut reiciendis blanditiis. Animi
            deleniti, dolore hic ad ducimus laboriosam illum voluptatibus. Ipsam
            beatae deserunt dolore assumenda quaerat eveniet iste provident
            vitae iusto voluptatibus magni nemo.
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>What We Do?</div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            corrupti iste numquam alias accusantium quasi repellat hic adipisci
            impedit, cupiditate culpa ratione nobis at deserunt rem aut nesciunt
            asperiores dolor. Quo vitae consequuntur adipisci doloremque? Sed
            quo asperiores in. Eligendi quo porro id possimus repellendus, sed
            asperiores non vero eum impedit sit eius blanditiis, natus quia
            laudantium quos, nam aperiam. Iste numquam reiciendis, dolor
            distinctio ab voluptas commodi odit!
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />- Lorem ipsum dolor sit amet.
          </div>
          <Link href='/contact' className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
