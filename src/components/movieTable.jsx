import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
export default class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    const { movies: mv } = this.state;

    if (mv.length === 0) return <div className="alert alert-warning">There are no movies at the moment</div>;

    return (
      <div>
        <h3>Pleasee see out movies</h3>
        <p>Showing {mv.length} Movies in our store</p>
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
                  <button onClick={() => this.handleDelete(m._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  handleDelete = (id) => {
    console.log('u want to delete me?', id);
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };
}
