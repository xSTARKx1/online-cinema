import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { adminRoutes, userRoutes } from '@/config/constants'

import { checkAuth } from '@/store/user/user.actions'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const pathname = usePathname()
	const { logout } = useActions()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname])

	return !adminRoutes.includes(pathname) && !userRoutes.includes(pathname) ? (
		<>{children}</>
	) : (
		<DynamicCheckRole>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
