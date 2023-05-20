import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { atom, useRecoilState } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

const myAtom = atom({
  key: 'mykey1',
  default: 0,
})

export default function Home() {

  const [rec, setRec] = useRecoilState(myAtom)

  const increment = () => {
    setRec(rec + 1);
  };

  console.log(rec);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.center}>asdf</div>
        <p>Count: {rec}</p>
        <button onClick={increment}>Increment</button>
      </main>
    </>
  )
}
