import React, { Component } from "react";
import { connect } from "react-redux";
import '../../includes/bootstrap';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index.js"

export class ConnectedList extends Component {
  render() {
    return (
      <div className="bg-light">
        <h2 className="breadcrumb">Películas Favoritas</h2>
        <ul className="card-grup">
          {
            this.props.movies && this.props.movies.map((el, i) => (
              <li className="non-style">
              <div className="card">
              <img src={el.Poster} class="card-img-top" alt=""/>
                <div className="card-body">
                  <button className="btn btn-sm btn-danger"
                  onClick ={() => this.props.removeMovieFavorite({title: el.title, id: el.imdbID})}>x</button>
                <h5 class="card-title">{el.title}</h5>
                {/* <h4 clasName="card-title">{el.title}</h4> */}
                  </div>
              </div>
                  </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies:state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList)