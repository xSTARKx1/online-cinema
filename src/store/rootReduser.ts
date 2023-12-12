import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as userReduser } from '@/store/user/user.slice'

export const reducers = {
	user: userReduser,
	toastr: toastrReducer,
}
