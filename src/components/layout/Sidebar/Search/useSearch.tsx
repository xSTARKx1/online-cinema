import { ChangeEvent, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery({
		queryKey: ['search movie list', debouncedSearch],
		queryFn: () => MovieService.getAll(debouncedSearch),
		select: ({ data }) => data,
		enabled: !!debouncedSearch,
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
