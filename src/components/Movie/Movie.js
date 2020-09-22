import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import '../../includes/bootstrap';
import './Movie.css';
class Movie extends React.Component {
  componentDidMount(){
      const { match: {params: { id }}} = this.props;
    this.props.getMovieDetail(id);
  }

    render() {
      return (
            <div className="movie-detail container">
                {console.log(this.props.movie)}
                { 
                  !this.props.movie.Poster ? 
                  <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" width="250px" height="250px" />
                  : 
                  <img src={this.props.movie.Poster} width="250px" height="250px" />
                }
                <h1> {this.props.movie.Title}</h1>
                <h4> {this.props.movie.Year} </h4>
                <h3> {this.props.movie.Genre}</h3>
                <h3> {this.props.movie.Released}</h3>
                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
