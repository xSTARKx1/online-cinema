import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import { MovieService } from '@/services/movie.service'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in sidebar'],
		queryFn: () => MovieService.getMostPopularMovies(),
	})
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	)
}

export default PopularMovies
