import actions from './actions';
import {reduce} from "../../helpers";

export default (state = {show: false}, action) => reduce(state, action, {
	[actions.types.TOGGLE_TASK_MODAL]: () => ({
		...state,

		[action.uniqueId]: {
			...state[action.uniqueId],
			show: action.show,
		},
	}),
});
