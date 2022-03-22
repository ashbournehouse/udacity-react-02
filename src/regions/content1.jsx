import React from 'react';

class Content1 extends React.Component {
  render() {
    const profiles = this.props.profiles
    const users = this.props.users
    const movies = this.props.movies
    const filmsAndTheirFans = this.props.filmsAndTheirFans
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
              React.createElement( 'li', {key: profile.id, style: {color:'#aaaaaa', padding:'0.5em'}}, `${movieId} - ${movieTitle} - ${movieUserId}:${userName}`)
            ) // </li>
          })
        ), // </ul>
        React.createElement('ul', {style: {color:'#00ff00'}}, `Films list length: ${filmsAndTheirFans.length}`,
          filmsAndTheirFans.map(filmAndFans => {
        	console.log(`Filmlike is: ${filmAndFans.title}`);
        	return (
              React.createElement('li', {key: filmAndFans.title, style: {color:'#00ff00'}}, `Filem ID: ${filmAndFans.movieId} Film title: ${filmAndFans.title}`,
                React.createElement('ol', {}, `Ordered List length is: ${filmAndFans.fans.length}`,                    
                  filmAndFans.fans.map(fan => {
                    console.log(`Fan is: ${fan}`);
                    return(
                      React.createElement('li', {key: fan}, 
                        React.createElement('h4', {style: {color:'#00ff00', padding:'0.5em'}}, `${fan}`)
                      ) // </li>
                    )
                  })
                ) // <ol>
              ) // </li>
            )
          })
        ) // </ul>
      ) //</div>
    )
  }
}
  
export default Content1;
