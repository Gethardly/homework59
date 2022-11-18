import React, { Component } from "react";
import { Movie, MovieName } from "../../types";

interface Props {
    form: (movie: Movie) => void;
}

class MovieForm extends Component<Props> {
    state: MovieName = {
        name: '',
    }

    render() {
        const onFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;

            this.setState(prev => ({...prev, [name]: value}));
        };

        const onFormSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            this.props.form({
                id: Math.random().toString(),
                ...this.state,
            });
        };
        return (
            <>
                <form onSubmit={onFormSubmit}>
                    <input
                    name="name"
                    type="text"
                    onChange={onFromChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </>
        )
    }
}

export default MovieForm;