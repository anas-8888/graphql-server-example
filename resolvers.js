// data
import db from './_db.js';

export const resolvers = {
      Query: {
            games() {
                  return db.games;
            },
            game(_, args) {
                  return db.games.find((game) => game.id === args.id);
            },
            authors() {
                  return db.authors;
            },
            author(_, args) {
                  return db.authors.find((author) => author.id === args.id);
            },
            reviews() {
                  return db.reviews;
            },
            review(_, args) {
                  return db.reviews.find((review) => review.id === args.id);
            }
      },
      Game: {
            reviews(parent) {
                  return db.reviews.filter((r) => r.game_id === parent.id);
            }
      },
      Review: {
            author(parent) {
                  return db.authors.find((a) => a.id === parent.author_id);
            },
            game(parent) {
                  return db.games.find((g) => g.id === parent.game_id);
            }
      },
      Author: {
            reviews(parent) {
                  return db.reviews.filter((r) => r.author_id === parent.id);
            }
      },
      Mutation: {
            addGame(_, args) {
                  let game = {
                        ...args.game,
                        id: Math.floor(Math.random() * 10000).toString()
                  }
                  db.games.push(game);
                  return game;
            },
            deleteGame(_, args) {
                  db.games = db.games.filter((g) => g.id !== args.id);
                  return db.games;
            },
            updateGame(_, args) {
                  db.games = db.games.map((g) => {
                        if(g.id === args.id) {
                              return {...g, ...args.edits};
                        }
                        return g;
                  });
                  return db.games.find((g) => g.id === args.id);
            },

            addAuthor(_, args) {
                  let author = {
                        ...args.author,
                        id: Math.floor(Math.random() * 10000).toString()
                  }
                  db.authors.push(author);
                  return author;
            },
            deleteAuthor(_, args) {
                  db.authors = db.authors.filter((a) => a.id !== args.id);
                  return db.authors;
            },
            updateAuthor(_, args) {
                  db.authors = db.authors.map((a) => {
                        if(a.id === args.id) {
                              return {...a, ...args.edits};
                        }
                        return a;
                  });
                  return db.authors.find((a) => a.id === args.id);
            },

            addReview(_, args) {
                  let review = {
                        ...args.review,
                        id: Math.floor(Math.random() * 10000).toString()
                  }
                  db.reviews.push(review);
                  return review;
            },
            deleteReview(_, args) {
                  db.reviews = db.reviews.filter((r) => r.id !== args.id);
                  return db.reviews;
            },
            updateReview(_, args) {
                  db.reviews = db.reviews.map((r) => {
                        if(r.id === args.id) {
                              return {...r, ...args.edits};
                        }
                        return r;
                  });
                  return db.reviews.find((r) => r.id === args.id);
            },
      },
};