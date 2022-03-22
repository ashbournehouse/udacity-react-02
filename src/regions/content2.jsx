import React from 'react';

class Content2 extends React.Component {
  render() {
    const filmFans=this.props.filmFans;
    return (
      React.createElement('div', {className:'App-content', style: {backgroundColor:'#339933', padding:'2em'}},
        React.createElement('h2',{style: {color:'#000000'}},'List of movies and people who like them:'),
        React.createElement('ul', {},
          filmFans.map(film => {
        	const fans = Array.from(film.fans);
            return(
              React.createElement( 'li', {key: film.title},
                React.createElement('h4', {style: {color:'#000000', padding:'0.5em'}}, `${film.title}`),
                React.createElement('h4', {style: {color:'#000000', padding:'0.5em'}}, (fans.length > 0) ? `Liked by:` : 'Liked by: no-one'),
                React.createElement('ol', {},                     
                  fans.map(fan => {
                    return(
                      React.createElement('li', {key: fan}, 
                        React.createElement('h4', {style: {color:'#000000', padding:'0.5em'}}, `${fan}`)
                      )
                    )
                  })
                )
              )
            )
          })
        )
      )
    )
  }
}
  
export default Content2;
