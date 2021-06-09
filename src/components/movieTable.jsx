import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
export default class MovieTable extends Component {
  state = {
    movies: getMovies(),
    count: 1,
  };

  render() {
    return (
      <div>
        <h3>Pleasee see out movies</h3>;
        <ol>
          {this.state.movies.map((m) => (
            <li key={m._id}>
              <p>{m.title}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

// 1.prisideti boostrap@4.6
// 2.isitrauksim boostrap css

// 3.sugeneruosim lentele su movies duomenimis
// https://getbootstrap.com/docs/4.6/content/tables/

// 4.
