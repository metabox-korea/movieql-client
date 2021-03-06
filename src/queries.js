import gql from "graphql-tag";


export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            genres
        }
    }
`

export const MOVIE_DETAILS = gql`
    query getMovieDetails ($movieId: Int!) {
        movie(id: $movieId) {
            id
            medium_cover_image
            title
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId) {
            medium_cover_image
            title
            rating
        }
    }

`