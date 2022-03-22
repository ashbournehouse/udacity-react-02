import React from 'react';

class Content1 extends React.Component {
  render() {
    const profiles = this.props.profiles
    const users = this.props.users
    const movies = this.props.movies
    return (
      React.createElement('div', {className:'App-content', style: {backgroundColor:'#333399', padding:'2em'}},
        React.createElement('h2',{style: {color:'#aaaaaa'}},'How popular is MY favorite movie? (using React.createElement)'),       
        React.createElement('ul', {},
          profiles.map(profile => {
            const movieId = profile.favoriteMovieID;
            const movieTitle = movies[movieId].name;
            const movieUserId = profile.userID;
            const userName = users[movieUserId].name;
            return(
              React.createElement( 'li', {style: {color:'#aaaaaa', padding:'0.5em'}}, `${movieId} - ${movieTitle} - ${movieUserId}:${userName}`)
            )
          })
        )
      )
    )
  }
}
  
export default Content1;
