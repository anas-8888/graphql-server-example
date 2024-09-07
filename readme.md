# GraphQL Server Example

This is a simple GraphQL server built using Apollo Server, providing a set of queries and mutations for managing games, authors, and reviews.

## Project Structure

- `index.js`: The main entry point of the server where Apollo Server is configured and started.
- `_db.js`: Contains mock data for games, authors, and reviews.
- `schema.js`: Defines the GraphQL schema including types, queries, and mutations.
- `resolvers.js`: Contains the resolvers for handling the defined queries and mutations.

## Features

- Query games, authors, and reviews.
- Add, update, and delete games, authors, and reviews.
- Fetch reviews associated with games and authors.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/graphql-server-example.git
   cd graphql-server-example
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

Start the GraphQL server with the following command:

   ```bash
   node index.js
   ```

The server will start on http://localhost:4000.

### Testing

You can test the server by visiting http://localhost:4000 in your browser or using a GraphQL client like Postman, Insomnia, or Apollo Studio.

### GraphQL Schema

The schema includes the following types, queries, and mutations:

Types
Game, Review, Author

Queries
games, game(id: ID!)
reviews, review(id: ID!)
authors, author(id: ID!)

Mutations
addGame, updateGame, deleteGame
addAuthor, updateAuthor, deleteAuthor
addReview, updateReview, deleteReview

### License

This project is licensed under the ISC License
# graphql-server-example
# graphql-server-example
# graphql-server-example
