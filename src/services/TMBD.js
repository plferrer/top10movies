const apiKey = 'ede5375580591412d27583e5bc3958a7';
const baseUrl = 'https://api.themoviedb.org/3/';

const TMDB = {

  async top10(year){
    const endpoint = 'discover/movie';
    const params = '?api_key=' + apiKey + '&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=' + year;
    let response = await fetch(baseUrl + endpoint + params);
    if (response.status === 200) {
      let json = await response.json();
      return json.results.slice(0,10);
    }
    throw new Error(response.status);
  }

}


export default TMDB;