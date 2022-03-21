import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home page</div>  
    </div>
  )
}
