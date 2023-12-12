import type { Metadata } from 'next'

import Auth from '@/components/screens/auth/Auth'

import { NextPageAuth } from '@/shared/types/auth.types'

export const metadata: Metadata = {
	title: 'Profile',
}
const ProfilePage: NextPageAuth = () => {
	return <div>ProfilePage</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage
