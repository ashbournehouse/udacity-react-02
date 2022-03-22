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
   // initialise an array of movies title that can easily be sorted alphabetically
  var movieTitles = []; 
  // initialise an array of movies (so that we can .map)
  var filmsAndTheirFans = [];
 
  console.log(`After initialisation, length of filmFans is: ${filmsAndTheirFans.length}`);  
  console.log(movies)
  
  // First fill the array of movies titles
  for (const key in movies) {
    movieTitles.push(movies[key].name);
  }
  console.log('===========================');
  movieTitles.map(title => {
    console.log(title);
  })
  console.log('===========================');
  movieTitles.sort();
  console.log('Sorted:');
  console.log('===========================');
  movieTitles.map(title => {
    console.log(title);
  })
  console.log('===========================');

   // Working through in sorted order make 
   // a second array of objects contining 
   // movie title and users who 'favourite'
   // that movie.
   movieTitles.map(title => {
    for (const key in movies) {
      if (movies[key].name == title) {
        var likeList = new Object();
        const movieId = movies[key].id
        likeList['movieId'] = movies[key].id;
        likeList['title'] = movies[key].name;
        likeList['fans'] = [];
        filmsAndTheirFans.push(likeList);
        console.log(`Length of filmFans is: ${likeList['fans'].length}`);
      }
    }
  })
  
  // Now match fans to the movies
  for (const key in profiles) {
    filmsAndTheirFans.map(filmLike => {
      if (filmLike.movieId == profiles[key].favoriteMovieID) {
        console.log(`Profile: ${profiles[key].id} Favourite movie ID: ${profiles[key].favoriteMovieID} Movie: ${filmLike.title}`)
        filmLike['fans'].push(users[profiles[key].userID].name)
      }
    })
  }

  return filmsAndTheirFans
}

export default Etl;
