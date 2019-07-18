import React from 'react';
import MovieCard from './movieCard'
import "./movieList.css"
import WithLoading from './withLoading'

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            year: '',
            rate: ''
        }
    }
    handleMovieTitleChange = (e) => {
        let reg = /^[a-zA-Z0-9 ]*$/
        reg.test(e.target.value) && this.setState({ title: e.target.value })
    }
    handleMovieImageChange = (e) => {
        this.setState({ image: e.target.value })
    }
    handleMovieYearChange = (e) => {
        let reg = /^[0-9]*$/
        reg.test(e.target.value) && this.setState({ year: e.target.value })
    }
    handleMovieRateChange = (e) => {
        let reg = /^[0-5]*$/
        reg.test(e.target.value) && this.setState({ rate: e.target.value })
    }
    handleClick = () => {
        let newElt
        const asma = (this.state.title !== '' && this.state.image !== '' && this.state.year !== '' && this.state.rate !== '') ? (
            newElt = {
                title: this.state.title,
                image: this.state.image,
                date: parseInt(this.state.year),
                rate: parseInt(this.state.rate)
            },
            this.props.newMovie(newElt),
            this.setState({
                title: '',
                image: '',
                year: '',
                rate: ''

            })
        ) : (
            false
        )
    }
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    {this.props.listMovies.map((el, i) => <MovieCard key={i} movie={el} />)}
                    <button type="button" data-toggle="modal" data-target="#myModal" className="mb-4 col-sm-12 col-md-6 col-lg-4 modal-btn">
                        <div style={{ height: "388px" }}>
                            <div className="img-styling" >
                            </div>
                        </div>
                    </button>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Enter your new movie</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    <div className="row mb-1">
                                        <p className="col-2">Title:</p>
                                        <input type="text" maxLength="30" value={this.state.title} placeholder="Movie title" onChange={(e) => this.handleMovieTitleChange(e)} className="col-6" />
                                    </div>
                                    <div className="row mb-1">
                                        <p className="col-2">Image:</p>
                                        <input type="text" value={this.state.image} placeholder="UrL for your image" onChange={(e) => this.handleMovieImageChange(e)} className="col-6" />
                                    </div>
                                    <div className="row mb-1">
                                        <p className="col-2">Year:</p>
                                        <input type="text" maxLength="4" value={this.state.year} placeholder="2000" onChange={(e) => this.handleMovieYearChange(e)} className="col-6" />

                                    </div>
                                    <div className="row mb-1">
                                        <p className="col-2">Rate:</p>
                                        <input type="text" maxLength="1" value={this.state.rate} onChange={(e) => this.handleMovieRateChange(e)} className="col-6" />

                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={this.handleClick}>Ajouter</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WithLoading(MovieList);