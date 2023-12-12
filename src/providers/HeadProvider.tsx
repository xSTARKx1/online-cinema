import type { FC, PropsWithChildren } from 'react'
import NextNProgress from 'nextjs-progressbar'

import { accentColor } from '@/config/constants'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={100}
				showOnShallow={true}
			/>
			{children}
		</>
	)
}

export default HeadProvider
