import actions from './actions';
import {reduce} from "../../helpers";

export default (state = {}, action) => reduce(state, action, {
	[actions.types.TASK]: () => ({
		...action.task,
	}),
});
