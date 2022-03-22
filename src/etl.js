function Etl(profiles, users, movies) {
  /***************************************************************
  I'm going to try and make this:
  
  const filmFans = [
  {title:"Forest Gump", fans:['Nicholas Lain']},
  {title:"Get Out", fans:['Autumn Green', 'John Doe']},
  {title:"Million Dollar Baby", fans:[]},
  {title:"Planet Earth", fans:['Jane Jones', 'Matthew Johnson']},
  {title:"Selma", fans:['Lauren Carlson']},
  ];
  
  ***************************************************************/
  
  // initialise an array of movies (so that we can .map)
  var filmFans = [];
  console.log(`After initialisation, length of filmFans is: ${filmFans.length}`);
  
  console.log(movies)
  
  // First fill the array of movies
  for (const key in movies) {
    var likeList = new Object();
    const movieId = movies[key].id
    likeList['movieId'] = movies[key].id;
    likeList['title'] = movies[key].name;
    likeList['fans'] = [];
    filmFans.push(likeList);
    console.log(`Length of filmFans is: ${likeList['fans'].length}`);
  }
  
  // Now match fans to the movies
  for (const key in profiles) {
    filmFans.map(filmLike => {
      if (filmLike.movieId == profiles[key].favoriteMovieID) {
        console.log(`Profile: ${profiles[key].id} Favourite movie ID: ${profiles[key].favoriteMovieID} Movie: ${filmLike.title}`)
        filmLike['fans'].push(users[profiles[key].userID].name)
      }
    })
  }

  return filmFans
}

export default Etl;
