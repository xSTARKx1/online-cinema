import { FC } from 'react'

import { IMovieList } from './MovieList.interface'
import MovieItem from './MovieItem'

import styles from './MovieList.module.scss'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ title, movies, link }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
