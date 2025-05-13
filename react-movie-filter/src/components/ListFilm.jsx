import React from 'react';
import { useState,useEffect } from 'react';



const FilmList = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
]
const ListFilm = () => {
    let [film, setFilm] = useState(FilmList);

    const [value, setValue] = useState("");
    const cambioValore = (e) => {
        setValue(e.target.value)
    }

   useEffect(() => {
        if (value === "") {
            setFilm(FilmList);
        } else {
            const filteredFilm = FilmList.filter((film) =>
                film.genre.toLowerCase().includes(value.toLowerCase())
            );
            setFilm(filteredFilm);
        }
    }, [value]);;

    return (
        <>
            <div className="contol">
                <select className="form-select" aria-label="Default select example" onChange={cambioValore}>
                    <option selected className='select' value="">Seleziona il genere</option>
                    <option value="fantascienza">Fantascienza</option>
                    <option value="thriller">Thriller</option>
                    <option value="romantico">Romantico</option>
                    <option value="azione">Azione</option>
                </select>
                {/* <button className='search' onClick={ setSearch}> cerca</button> */}
            </div>

            {
                film.map((film, index) => (
                    <div className="card" key={index}>
                        <h3>{film.title}</h3>
                        <p>{film.genre}</p>
                    </div>
                ))
            }
        </>
    )
}



export default ListFilm

