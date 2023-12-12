import type { NextPage } from 'next'
import type { Metadata } from 'next'

import Auth from '@/components/screens/auth/Auth'

export const metadata: Metadata = {
	title: 'Auth',
}
const AuthPage: NextPage = () => {
	return <Auth />
}

export default AuthPage
