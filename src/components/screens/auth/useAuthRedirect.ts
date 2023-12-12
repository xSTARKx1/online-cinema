'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const pathName = usePathname()
	const { push } = useRouter()

	useLayoutEffect(() => {
		if (user && pathName === '/auth') push('/')
	}, [user, push])
}
