import { useQuery } from '@tanstack/react-query'

import { GenreService } from '@/services/genre.service'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery({
		queryKey: ['popular genre menu'],
		queryFn: () => GenreService.getAll(),
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						}) as IMenuItem
				)
				.splice(0, 4),
	})

	return queryData
}
