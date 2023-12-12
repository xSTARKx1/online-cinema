import { FC } from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { ISeo } from './meta.interface'

const Meta: FC = () => {
	const pathname = usePathname()
	const currentUrl = `${process.env.APP_URL}${pathname}`
	return <div>Meta</div>
}

export default Meta
