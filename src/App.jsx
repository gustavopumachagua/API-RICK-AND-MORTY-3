import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import DarkMode from "./components/DarkMode";

function App() {
  const API = "https://rickandmortyapi.com/api";

  // Page state
  const [page, setPage] = useState(1);

  // Characters state
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const filterCharacters = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = searchCharacter.filter((character) =>
      `${character.name}`.toLocaleLowerCase().includes(value)
    );
    setCharacters(filteredUsers);
  };

  const fetchCharacters = async (api) => {
    await fetch(`${api}/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setSearchCharacter(data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCharacters(API);
  }, [page]);

  return (
    <>
      <Header />
      <DarkMode />
      <SearchBar filterCharacters={filterCharacters} />
      <Main>
        {characters.map((character, index) => (
          <Card
            name={character.name}
            key={index}
            img={character.image}
            status={character.status}
            specie={character.species}
            dimension={character.origin.name}
            created={character.created}
          />
        ))}
      </Main>
      <NavBar page={page} setPage={setPage}></NavBar>
      <Footer />
    </>
  );
}

export { App };
