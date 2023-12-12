import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			closeOnToastrClick
			progressBar={false}
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast
