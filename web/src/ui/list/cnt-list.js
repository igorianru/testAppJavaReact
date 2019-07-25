import {connect} from 'react-redux'
import {getList} from '../../actions/list'
import {addDelete} from '../../actions/task-remove'
import List from './list'

function mapStateToProps(state) {
  const {tasks} = state.lists;

  return {
    tasks
  }
}

const mapDispatchToProps = {
  getList,
  addDelete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
