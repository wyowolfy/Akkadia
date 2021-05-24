/**
The MIT License (MIT)

Copyright (c) 2021 NFT-DAO Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import Head from 'next/head'
import styles from 'styles/Home.module.css'
import React from 'react'
import RaffleTopNavbar from 'components/raffle/RaffleTopNavbar'
import RaffleFooter from 'components/raffle/RaffleFooter'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akkadia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RaffleTopNavbar />
      <main className={styles.main}>
        <AboutBanner />
        <AboutSection />
        <SubscribeSection />
      </main>
      <RaffleFooter />
    </div>
  )
}

const AboutBanner = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '430px',
          backgroundImage: 'url(banner_background.jpg)',
          backgroundSize: 'cover',
        }}
      >
        test
      </div>
    </>
  )
}

const AboutSection = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '1900px', // todo: dynamic and responsive layout
          background: 'linear-gradient(180deg, #000000 30%, #081849 100%)',
        }}
      >
        test
      </div>
    </>
  )
}

const SubscribeSection = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '250px', // todo: dynamic and responsive layout
          backgroundImage: 'url(subscribe_background.jpg)',
          backgroundSize: 'cover',
        }}
      ></div>
    </>
  )
}

export default AboutPage