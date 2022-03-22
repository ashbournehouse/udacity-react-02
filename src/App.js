import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './regions/banner.jsx';
import Content1 from './regions/content1.jsx';
import Content2 from './regions/content2.jsx';

/* Display a list of movies where each movie contains a list of users that favorited it.
For detailed instructions, refer to instructions.md. */

const profiles = [
  {id: 1, userID: '1', favoriteMovieID: '1',},
  {id: 2, userID: '2', favoriteMovieID: '1',},
  {id: 3, userID: '4', favoriteMovieID: '5',},
  {id: 4, userID: '5', favoriteMovieID: '2',},
  {id: 5, userID: '3', favoriteMovieID: '5',},
  {id: 6, userID: '6', favoriteMovieID: '4',},
];
const users = {
  1: {id: 1, name: 'Jane Jones', userName: 'coder',},
  2: {id: 2, name: 'Matthew Johnson', userName: 'mpage',},
  3: {id: 3, name: 'Autumn Green', userName: 'user123',},
  4: {id: 4, name: 'John Doe', userName: 'user123',},
  5: {id: 5, name: 'Lauren Carlson', userName: 'user123',},
  6: {id: 6, name: 'Nicholas Lain', userName: 'user123',},
};
const movies = {
  1: {id: 1, name: 'Planet Earth',},
  2: {id: 2, name: 'Selma',},
  3: {id: 3, name: 'Million Dollar Baby',},
  4: {id: 4, name: 'Forrest Gump',},
  5: {id: 5, name: 'Get Out',},
};
/* Make a datastructure that allows you, easily, to display the required information */
const filmFans = [
  {title:"Forest Gump", fans:['Nicholas Lain']},
  {title:"Get Out", fans:['Autumn Green', 'John Doe']},
  {title:"Million Dollar Baby", fans:[]},
  {title:"Planet Earth", fans:['Jane Jones', 'Matthew Johnson']},
  {title:"Selma", fans:['Lauren Carlson']},
];

class App extends Component {
  render() {
    return (
      /****************************************************************/
      /* Build the page using React.creatElement                      */
      React.createElement('div', {className:'App'},
        <Banner />,
        <Content1 profiles={profiles} users={users} movies={movies} />,
        <Content2 filmFans={filmFans} />,
      )
    )
  }
}

export default App;
