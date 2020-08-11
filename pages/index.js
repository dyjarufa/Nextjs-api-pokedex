import React, { useState } from 'react';

import Head from 'next/head';

import Link from 'next/link';

export async function getStaticProps(context){
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((responseServer) => {
      if(responseServer.ok){
        return responseServer.json();
      }
    })
    .then((responseObject) => {
      return responseObject.pokemon_entries;
    })

    return {
      props: {
        pokemons
      }
    }
}

export default function Home({ pokemons }){
  // const { pokemons } = props;
  return (
   <div>
     <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     Pokédex - Learning Next.js with Pokemon API

     <ul>
       <li>
         <Link href="/">
          <a>Home</a>
         </Link>
       </li>
       <li>
         <Link href="/about">
          <a >About Project</a>
         </Link>
       </li>



       {pokemons.map((pokemon) => (
         <li key={pokemon.entry_number}>
           <Link href={`/pokemon/${pokemon.entry_number}`}>
            <a>
              {pokemon.pokemon_species.name}
            </a>
           </Link>
         </li>
       ))}
     </ul>
   </div>
  )
  }
