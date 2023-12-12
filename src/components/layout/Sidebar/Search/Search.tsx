import type { FC } from 'react'

import SearchField from '@/components/ui/search-field/SearchField'
import { useSearch } from './useSearch'
import SearchList from './SearchList/SearchList'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
