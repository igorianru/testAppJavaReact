import keyMirror from 'keymirror';

const
	addTaskObject = task => ({task, type: types.TASK}),
	toggle = ({show, uniqueId}) => ({show, type: types.TOGGLE_TASK_MODAL, uniqueId}),

	types = keyMirror({
		TOGGLE_TASK_MODAL: null,
		TASK: null,
	});



export default {addTaskObject, toggle, types};
