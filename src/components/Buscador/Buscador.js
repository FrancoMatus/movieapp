import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions/index.js";
import '../../includes/bootstrap';
import { bindActionCreators } from "redux";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ay AY Ay"
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    console.log("SE DISPARA EL SUBMIT")
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <label className="label font-weight-bold" htmlFor="title">Película: </label>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              className="form-control mr-sm-2"
            />
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">BUSCAR</button>
        </form>
        <ul>

         {
           this.props.movies && this.props.movies.map((el, i) => (
             <div>
               
               <NavLink to={`/movie/${el.imdbID}`}>{el.Title}</NavLink>
               <button className="btn btn-primary" onClick={() => this.props.addMovieFavorite({title: el.Title, id: el.imdbID})}>
               FAVORITE
                 </button>
             </div>
           ))
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);