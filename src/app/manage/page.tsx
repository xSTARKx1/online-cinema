import type { Metadata } from 'next'

import { NextPageAuth } from '@/shared/types/auth.types'

export const metadata: Metadata = {
	title: 'Manage',
}
const AdminPage: NextPageAuth = () => {
	return <div>AdminPage</div>
}

export default AdminPage
