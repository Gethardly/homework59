import React, { Component } from "react";
import { Movie } from "../../../types";

interface Props {
    movie: Movie;
    movieChange: React.ChangeEventHandler<HTMLInputElement>;
    deleteMovie: React.MouseEventHandler;
}

class ShowMovie extends Component<Props> {
    shouldComponentUpdate(nextProps: Props) {
        return nextProps.movie !== this.props.movie
    }

    render() {
        return (
            <div style={{marginTop: "10px"}}>
                <input type="text" value={this.props.movie.name} onChange={this.props.movieChange}/>
                <button onClick={this.props.deleteMovie}>X</button>
            </div>
        )
    }
}

export default ShowMovie;