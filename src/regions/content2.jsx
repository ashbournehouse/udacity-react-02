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
                React.createElement('h4', {style: {color:'#000000', padding:'0.2em'}}, `${film.title} - ${(fans.length > 0) ? `liked by:` : "is nobody's favourite :-("}`),
                React.createElement('ol', {},                     
                  fans.map(fan => {
                    return(
                      React.createElement('li', {key: fan}, 
                        React.createElement('p', {style: {color:'#000000', padding:'0.2em 0 0.2em 0.5em'}}, `${fan}`)
                      ) // </li>
                    )
                  })
                ) // </ol>
              ) // </li>
            )
          })
        ) // </ul>
      )
    )
  }
}
  
export default Content2;
