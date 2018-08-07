import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
    <Query query={HOME_PAGE}>
        {({loading, error, data}) => {
            if (loading) return <span>loading</span>;
            if (error) return <span>something happened</span>;
            // if (data) {
            //     console.log(data);
            //     return <span>yay</span>;
            // }

            return data.movies.map(movie => <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>);
        }}
    </Query>
);

export default Home;