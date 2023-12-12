import { FC } from 'react'
import cn from 'classnames'

import { IButton } from '@/components/ui/form-elements/form.interface'

import styles from './form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={cn(styles.button, className)}>
			{children}
		</button>
	)
}

export default Button
