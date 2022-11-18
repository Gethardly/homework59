import React from "react";
import { ChuckNorrisJoke } from "../../../types";

interface Props {
    joke: ChuckNorrisJoke;
}

const JokeCard: React.FC<Props> = ({joke}) => {
    return (
        <div className="card" style={{width: "18rem", marginTop: "15px"}}>
            <img src={joke.icon_url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Chuck Norris random joke</h5>
            <p className="card-text">{joke.value}</p>
          </div>
        </div>
    )
}

export default JokeCard;