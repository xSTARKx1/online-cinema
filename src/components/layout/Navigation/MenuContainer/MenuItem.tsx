import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { link, title, icon } }) => {
	const pathname = usePathname()

	return (
		<li
			className={cn({
				[styles.active]: pathname === link,
			})}
		>
			<Link href={link}>
				<MaterialIcon name={icon} />
				<span>{title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
