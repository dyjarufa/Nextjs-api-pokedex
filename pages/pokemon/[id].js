import React from "react";

export default function Pokemon({ pokemon}){
  return(
    <div>
      <img src={pokemon} alt="Pokémon Image"/>
    </div>
  )
}

//params from getStaticPath could be access here
export async function getStaticProps({ params }){
  // console.log(params);

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((responseServer) => {
      if(responseServer.ok){
        return responseServer.json();
      }
      throw new Error('oh!! Has a problem... ');
    })
    .then((responseObject) => responseObject);

    return{
      props: {
        pokemon: pokemon.sprites.front_default
      }
    }
  }

export async function getStaticPaths(){
  return {
   paths:[
     {
       params: {
         id: '1'
       },
      },
      {
        params: {
          id: '2'
        },
       },
       {
        params: {
          id: '3'
        },
       },
   ],
   fallback: false,
  };
}
