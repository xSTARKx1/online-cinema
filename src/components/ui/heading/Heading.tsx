import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<div
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</div>
	)
}

export default Heading
