import React from 'react';
import './pokedex.css';

/*
  Componente Pokedex
  -------------------
  - Este componente es una tarjeta estática que muestra información de un Pokémon (Gengar)
  - No recibe props actualmente. Puedes convertirlo fácilmente en un componente reutilizable
    pasando un objeto `pokemon` con las propiedades necesarias (nombre, id, imagen, stats, etc.)

  Posibles mejoras:
  - Recibir `pokemon` como prop o obtener datos de la PokeAPI mediante fetch/axios
  - Añadir navegación entre pokemons o usar react-router para rutas dinámicas
  - Extraer subcomponentes: <Header/>, <PokemonMain/>, <Footer/OtherPokemons/>
  - Manejar accesibilidad (aria-labels, roles, focus styles)
*/

const Pokedex = () => {
    // Manejador cuando se hace clic en un botón de otro Pokémon
    // Actualmente solo hace un console.log; aquí podrías:
    // - Cambiar el estado local para mostrar ese Pokémon
    // - Navegar a otra ruta con react-router
    // - Abrir un modal con la ficha completa
    const handlePokemonClick = (pokemonName) => {
        console.log(`Has hecho clic en ${pokemonName}. ¡Funcionalidad por implementar!`);
    };

    return (
        <main className="pokedex">
            {/* Header: título y marca */}
            <header className="pokedex-header">
                {/*
                  Aquí se muestra el nombre del Pokémon.
                  Si el componente recibiera props, reemplaza "Gengar" por {pokemon.name}
                */}
                <h1>Gengar</h1>
                <span className="pokedex-brand">POKÉDEX</span>
            </header>

            {/* Sección principal con la imagen y estadísticas */}
            <section className="pokemon-main">
                <figure className="pokemon-figure">
                    {/*
                      Imagen oficial del artwork. Para que funcione con cualquier Pokémon,
                      usa la URL o la prop `pokemon.image`.
                    */}
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" alt="Gengar" className="pokemon-image" />
                </figure>

                <div className="pokemon-info">
                    <div className="pokemon-stats">
                        {/* Cada bloque .stat-item contiene la etiqueta y el valor */}
                        <div className="stat-item">
                            <span className="label">NO.</span>
                            <span className="value">094</span>
                        </div>
                        <div className="stat-item">
                            <span className="label">nivel</span>
                            <span className="value">100</span>
                        </div>
                        <div className="stat-item">
                            <span className="label">tipo</span>
                            <span className="value">GHOST</span>
                        </div>
                        <div className="stat-item">
                            <span className="label">habilidades</span>
                            <span className="value">Cuerpo maldito</span>
                        </div>
                        <div className="stat-item">
                            <span className="label">altura</span>
                            <span className="value">1,5 m</span>
                        </div>
                        <div className="stat-item">
                            <span className="label">peso</span>
                            <span className="value">40,5 Kg</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer: lista de otros pokémons como botones interactivos */}
            <footer className="pokedex-footer">
                <h2>Otros puchamones</h2>
                <div className="other-pokemons">
                    {/* Cada botón podría generarse desde un array de objetos con map() */}
                    <button className="pokemon-button" onClick={() => handlePokemonClick('Haunter')}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg" alt="Haunter" />
                    </button>
                    <button className="pokemon-button" onClick={() => handlePokemonClick('Gastly')}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg" alt="Gastly" />
                    </button>
                    <button className="pokemon-button" onClick={() => handlePokemonClick('Misdreavus')}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg" alt="Misdreavus" />
                    </button>
                    <button className="pokemon-button" onClick={() => handlePokemonClick('Duskull')}>
                        {/* Imagen local relativa. Asegúrate de que el archivo exista en public/img/yo.png */}
                        <img src="/img/yo.png" alt="madio" width="100" />
                    </button>
                </div>
            </footer>
        </main>
    );
};

export default Pokedex;