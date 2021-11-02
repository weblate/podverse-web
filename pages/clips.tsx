import Head from 'next/head'
// import Image from 'next/image'
import { NavBar } from '~/components'
import styles from '~/../styles/Home.module.scss'

export default function Clips() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <p>clips!!!</p>
    </div>
  )
}
