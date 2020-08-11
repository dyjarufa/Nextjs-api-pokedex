import React from 'react';

import Head from 'next/head'

import Link from 'next/link';

function About() {
  return (
    <div>
      <Head>
        <title>About Pokédex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default About;
