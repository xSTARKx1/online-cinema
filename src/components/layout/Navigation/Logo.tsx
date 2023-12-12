import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10 block" href="/">
			<Image
				src={logoImage}
				width={247}
				height={120}
				alt="Online cinema"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
