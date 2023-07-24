import './index.css'
import MoviesSlider from '../MoviesSlider'

const genres = {
  action: 'ACTION',
  comedy: 'COMEDY',
}
const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    movie => movie.categoryId === genres.action,
  )
  const comedyMovies = moviesList.filter(
    movie => movie.categoryId === genres.comedy,
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeVideo"
      />
      <h1 className="head">Action Movies</h1>
      <MoviesSlider moviesList={actionMovies} />
      <h1 className="head">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMovies} />
    </div>
  )
}

export default PrimeVideo
