import React, { Component, useEffect, useState } from "react";
import { ChuckNorrisJoke } from "../../types";
import JokeCard from "./JokeCard/JokeCard";
const url = 'https://api.chucknorris.io/jokes/random';


const Joke = () => {
    const [jokesTotal, setJokesTotal] = useState<number>(2);
    const [initJokes, setJokes] = useState<ChuckNorrisJoke[]>([]);
    let Loading: string = '';

    const fetchData = async (n: number) => {
        Loading = 'Loading...';
        console.log('fetchdata');
        const jokes: ChuckNorrisJoke[] = [];
        for(let i=0; i < n; i++) {
            const response = await fetch(url);

            if (response.ok) {
                const joke: ChuckNorrisJoke = await response.json();
                jokes.push(joke);
            }
        }

        const results = await Promise.all(jokes);
        setJokes(prev => results);
    }

    useEffect(() => {
        fetchData(jokesTotal).catch(console.error);
    }, []);

    return (
        <>
                {Loading}
                <label>Total of jokes:  
                    <input type="number" 
                    onChange={(e) => {
                          setJokesTotal(parseInt(e.target.value));
                        }}
                    />
                </label>
                <button onClick={() => fetchData(jokesTotal)}>Show</button>
            
            <div className="jokes">
                {initJokes.map(joke => 
                <JokeCard key={joke.id} joke={joke}/>)}
            </div>
        </>
    )
}

export default Joke;