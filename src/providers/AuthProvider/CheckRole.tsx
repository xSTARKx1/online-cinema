'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { adminRoutes, userRoutes } from '@/config/constants'

const CheckRole: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const { replace } = useRouter()
	const pathname = usePathname()
	const Children = () => <>{children}</>

	if (user?.isAdmin) return <Children />
	if (adminRoutes.includes(pathname)) {
		pathname !== '404' && replace('/404')
		return null
	}

	const isUser = user && !user.isAdmin

	if (isUser && userRoutes.includes(pathname)) return <Children />
	else {
		pathname !== 'auth' && replace('/auth')
		return null
	}
}

export default CheckRole
