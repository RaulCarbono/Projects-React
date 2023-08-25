import { useEffect } from 'react';
import { petition } from '../helpers/utils';
import { useState } from 'react';

export const Card = () => {
  const [personaje, setPersonaje] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const personajes = await petition();
      setPersonaje(personajes);
    }
    fetchData();
  }, []);

  console.log(personaje);
  return (
    <>
      <div className="container">
        {personaje.map((person) => (
          <>
            <div className="container_content">
              <div className="name_person">{person.name}</div>
              <img
                className="image"
                src={person.image}
                alt=""
              />
              <span className="container_span">Type : {person.species}</span>
              <span className="container_span">caps : {person.episode.length}</span>
              <span className="container_span">origin : {person.origin.name}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
