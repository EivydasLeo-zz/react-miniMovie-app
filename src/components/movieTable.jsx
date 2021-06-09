import React, { Component } from 'react';
import { genres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
export default class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  deleteBtn() {}

  render() {
    return (
      <div>
        <h3>Pleasee see out movies</h3>
        <p>Showing XX Movies in our store</p>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <th>{m.title}</th>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
