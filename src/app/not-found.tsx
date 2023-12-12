import { FC } from 'react'
import { Metadata } from 'next'
import Heading from '@/components/ui/heading/Heading'

export const metadata: Metadata = {
	title: 'Page not found',
}

const Error404: FC = () => {
	return (
		<>
			<Heading title="404 - Page not found" />
		</>
	)
}

export default Error404
