import { FC } from 'react'

import { IHome } from '@/components/screens/home/home.interface'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<div>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</div>
	)
}

export default Home
