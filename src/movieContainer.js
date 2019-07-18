import React from 'react';
import './movieContainer.css';
import MovieList from './movieList';

const movies = [
    {
        title: 'the light between oceans',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_Light_Between_Oceans_poster.jpg/220px-The_Light_Between_Oceans_poster.jpg',
        date: 2016,
        rate: 5
    },
    {
        title: 'me before you',
        image: 'https://lastfm-img2.akamaized.net/i/u/770x0/cab07a02b8de812336b286dfa5dc9ac3.jpg',
        date: 2016,
        rate: 3
    },
    {
        title: 'zootopia',
        image: 'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/8b/89/0e/8b890ec5-4ccd-573b-c079-4cd8fb1eda4f/pr_source.jpg/268x0w.jpg',
        date: 2016,
        rate: 5
    },
    {
        title: 'the upside',
        image: 'https://superclub.videotron.com/media/catalog/product/cache/bdfe59afc1d8bd5cfc84d1a6934fa46c/u/p/upside_the_dvd_2d.png',
        date: 2017,
        rate: 3
    },
    {
        title: 'the legend',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Video/b7/ca/6a/mzi.xiydnopk.jpg/268x0w.jpg',
        date: 2007,
        rate: 4
    },
    {
        title: 'Captain Marvel',
        image: 'https://thepowerzone.files.wordpress.com/2019/04/affiche-film-captain-marvel-2019.jpg?w=736',
        date: 2019,
        rate: 0
    },
    {
        title: 'Prophetie',
        image: 'http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/92/93/38/20225969.jpg',
        date: 2012,
        rate: 1
    },
    {
        title: 'RESISTANCE',
        image: 'https://m.media-amazon.com/images/M/MV5BMTUwNTE1OTQ5Ml5BMl5BanBnXkFtZTgwNzI5MzcwMzE@._V1_.jpg',
        date: 2011,
        rate: 2
    }
]
class ContainerMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moviesTab: movies,
            searchWord: '',
            Star1Isclicked: false,
            Star2Isclicked: false,
            Star3Isclicked: false,
            Star4Isclicked: false,
            Star5Isclicked: false
        }
    }

    updateListMovie = (x) => {
        console.log(x)
        let newmov = this.state.moviesTab.concat(x);
        console.log(newmov)
        this.setState({ moviesTab: newmov })
    }
    handleChange(e) {
        this.setState({ searchWord: e.target.value })
    }
    handleClick(e) {
        this.filterName(this.state.searchWord)
        this.setState({ searchWord: '' })
    }
    handelStarClick(message, e) {

        const response = message === 'star1' ? (
            this.state.Star1Isclicked === false ? (
                this.setState({ Star1Isclicked: true }),
                this.filterRate(1)
            ) : (
                    this.setState({ Star1Isclicked: false, Star2Isclicked: false, Star3Isclicked: false, Star4Isclicked: false, Star5Isclicked: false }),
                    this.filterRate(0)
                )
        ) : (
                message === 'star2' ? (
                    this.state.Star2Isclicked === false ? (
                        this.setState({ Star1Isclicked: true, Star2Isclicked: true }),
                        this.filterRate(2)
                    ) : (
                            (this.state.Star3Isclicked === false && this.state.Star4Isclicked === false && this.state.Star5Isclicked === false) ? (
                                this.setState({ Star2Isclicked: false }),
                                this.filterRate(1)
                            ) : (
                                    this.setState({ Star2Isclicked: false, Star3Isclicked: false, Star4Isclicked: false, Star5Isclicked: false }),
                                    this.filterRate(1)
                                )
                        )

                ) : (
                        message === 'star3' ? (
                            this.state.Star3Isclicked === false ? (
                                this.setState({ Star1Isclicked: true, Star2Isclicked: true, Star3Isclicked: true }),
                                this.filterRate(3)
                            ) : (
                                    (this.state.Star4Isclicked === false && this.state.Star5Isclicked === false) ? (
                                        this.setState({ Star3Isclicked: false }),
                                        this.filterRate(2)
                                    ) : (
                                            this.setState({ Star3Isclicked: false, Star4Isclicked: false, Star5Isclicked: false }),
                                            this.filterRate(2)
                                        )
                                )
                        ) : (
                                message === 'star4' ? (
                                    this.state.Star4Isclicked === false ? (
                                        this.setState({ Star1Isclicked: true, Star2Isclicked: true, Star3Isclicked: true, Star4Isclicked: true }),
                                        this.filterRate(4)
                                    ) : (
                                            this.state.Star5Isclicked === false ? (
                                                this.setState({ Star4Isclicked: false }),
                                                this.filterRate(3)
                                            ) : (
                                                    this.setState({ Star4Isclicked: false, Star5Isclicked: false }),
                                                    this.filterRate(3)
                                                )
                                        )
                                ) : (
                                        message === 'star5' && (
                                            this.state.Star5Isclicked === false ? (
                                                this.setState({ Star1Isclicked: true, Star2Isclicked: true, Star3Isclicked: true, Star4Isclicked: true, Star5Isclicked: true }),
                                                this.filterRate(5)
                                            ) : (
                                                    this.setState({ Star5Isclicked: false }),
                                                    this.filterRate(4)
                                                )
                                        )
                                    )
                            )
                    )
            )
    }
    star = () => {
        const response = (!this.state.Star1Isclicked && !this.state.Star2Isclicked && !this.state.Star3Isclicked && !this.state.Star4Isclicked && !this.state.Star5Isclicked) ? (
            <div>
                <i className="far fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                <i className="far fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                <i className="far fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                <i className="far fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
            </div>
        ) : (
                (this.state.Star1Isclicked && !this.state.Star2Isclicked && !this.state.Star3Isclicked && !this.state.Star4Isclicked && !this.state.Star5Isclicked) ? (
                    <div>
                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                    </div>
                ) : (
                        (this.state.Star1Isclicked && this.state.Star2Isclicked && !this.state.Star3Isclicked && !this.state.Star4Isclicked && !this.state.Star5Isclicked) ? (
                            <div>
                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                                <i className="far fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                                <i className="far fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                                <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                            </div>
                        ) : (
                                (this.state.Star1Isclicked && this.state.Star2Isclicked && this.state.Star3Isclicked && !this.state.Star4Isclicked && !this.state.Star5Isclicked) ? (
                                    <div>
                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                                        <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                                    </div>
                                ) : (
                                        (this.state.Star1Isclicked && this.state.Star2Isclicked && this.state.Star3Isclicked && this.state.Star4Isclicked && !this.state.Star5Isclicked) ? (
                                            <div>
                                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                                                <i className="fas fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                                                <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                                            </div>
                                        ) : (
                                                (this.state.Star1Isclicked && this.state.Star2Isclicked && this.state.Star3Isclicked && this.state.Star4Isclicked && this.state.Star5Isclicked) ? (
                                                    <div>
                                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                                                        <i className="fas fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                                                    </div>
                                                ) : (
                                                        <div>
                                                            <i className="far fa-star" onClick={(e) => this.handelStarClick('star1', e)}></i>
                                                            <i className="far fa-star" onClick={(e) => this.handelStarClick('star2', e)}></i>
                                                            <i className="far fa-star" onClick={(e) => this.handelStarClick('star3', e)}></i>
                                                            <i className="far fa-star" onClick={(e) => this.handelStarClick('star4', e)}></i>
                                                            <i className="far fa-star" onClick={(e) => this.handelStarClick('star5', e)}></i>
                                                        </div>
                                                    )
                                            )
                                    )
                            )
                    )
            )
        return response
    }
    filterName = (param) => {
        const response = (
            this.state.Star1Isclicked === false &&
            this.state.Star2Isclicked === false &&
            this.state.Star3Isclicked === false &&
            this.state.Star4Isclicked === false &&
            this.state.Star5Isclicked === false) ? (
                movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1)
            ) : (
                (
                    this.state.Star1Isclicked === true &&
                    this.state.Star2Isclicked === false &&
                    this.state.Star3Isclicked === false &&
                    this.state.Star4Isclicked === false &&
                    this.state.Star5Isclicked === false
                ) ? (
                        movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1 && el.rate >= 1)
                    ) : (
                        (
                            this.state.Star1Isclicked === true &&
                            this.state.Star2Isclicked === true &&
                            this.state.Star3Isclicked === false &&
                            this.state.Star4Isclicked === false &&
                            this.state.Star5Isclicked === false
                        ) ? (
                                movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1 && el.rate >= 2)
                            ) : (
                                (
                                    this.state.Star1Isclicked === true &&
                                    this.state.Star2Isclicked === true &&
                                    this.state.Star3Isclicked === true &&
                                    this.state.Star4Isclicked === false &&
                                    this.state.Star5Isclicked === false
                                ) ? (
                                        movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1 && el.rate >= 3)
                                    ) : (
                                        (
                                            this.state.Star1Isclicked === true &&
                                            this.state.Star2Isclicked === true &&
                                            this.state.Star3Isclicked === true &&
                                            this.state.Star4Isclicked === true &&
                                            this.state.Star5Isclicked === false
                                        ) ? (
                                                movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1 && el.rate >= 4)
                                            ) : (
                                                (
                                                    this.state.Star1Isclicked === true &&
                                                    this.state.Star2Isclicked === true &&
                                                    this.state.Star3Isclicked === true &&
                                                    this.state.Star4Isclicked === true &&
                                                    this.state.Star5Isclicked === true
                                                ) && movies.filter((el, i) => el.title.toLowerCase().indexOf(param) > -1 && el.rate >= 5)
                                            )
                                    )
                            )
                    )
            )
        this.setState({ moviesTab: response })

    }
    filterRate = (param) => {
        let filtred = movies.filter((el, i) => el.rate >= param)
        this.setState({ moviesTab: filtred })
    }
    render() {
        return (
            <div className="main-container">
                <div className="d-flex justify-content-around header">
                    <div className="align-self-center first-inner-header">
                        <input className="search" type="text" value={this.state.searchWord} placeholder="type movie name to search" onChange={(e) => this.handleChange(e)} />
                        <button onClick={(e) => this.handleClick(e)}>Search</button>
                    </div>
                    <div className="second-inner-header">
                        <p>Minimum rating</p>
                        {this.star()}
                    </div>
                </div>
                <MovieList listMovies={this.state.moviesTab} newMovie={(x) => this.updateListMovie(x)} />
            </div>

        )
    }
}
export default ContainerMovie
