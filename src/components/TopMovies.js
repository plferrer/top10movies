import React, { Component } from 'react'
import TopMoviesList from './TopMoviesList'
import TopMoviesHeader from './TopMoviesHeader'
import TMDB from '../services/TMBD'

export default class TopMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      topMovies:[],
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchMovies(this.state.year);
  }

  async fetchMovies(year) {
    this.setState({
      isLoading : true
    });

    try {
      let response = await TMDB.top10(year);
      this.setState({
        isLoading : false,
        topMovies: response
      });
    } catch(err) {
      alert(err);
      this.setState({
        isLoading : false
      });
    }
  }

  handleYearChange = (selectedYear) => {
    this.setState({
      year : selectedYear
    }, () => {
      this.fetchMovies(selectedYear);
    });

  }

  render() {

    return (
      <div>
        <TopMoviesHeader year={this.state.year} onSelect={this.handleYearChange} />
        {this.state.isLoading
          ? <p>Loading...</p>
          : <TopMoviesList movies={this.state.topMovies} />
        }

      </div>
    )
  }
}
