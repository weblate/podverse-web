import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PV } from '~/resources'

export default function Playlists() {
  const { t } = useTranslation()
  return (
    <div>
      <Head>
        <title>{t('Playlists')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Playlists!!!</p>
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
