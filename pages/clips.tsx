import Head from 'next/head'
// import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PV } from '~/resources'
import styles from '~/../styles/Home.module.scss'

export default function Clips() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Podverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>clips!!!</p>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, PV.i18n.fileNames.all))
    }
  }
}
