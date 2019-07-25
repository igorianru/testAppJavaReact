import React, {Component} from 'react'
import hardtack from 'hardtack'
import _ from 'lodash'
import Header from "../Header";
import {ListGroup} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/es/Col";
import CreateTask, {actions as createTaskModal}  from "../CreateTask";
import Dropdown from "react-bootstrap/es/Dropdown";
import {connect} from 'react-redux'
import {compose} from 'recompose';
import {bindActionCreators} from 'redux';

class List extends Component {
  state = {
    searchString: '',
    tasks: [],
    error: null,

    task: {
      name: '',
      from: '',
      to: '',
      status: 'penning',
      directoriesId: 1,
    },
  };

  handleLoad = () => {
    this.props.getList().then(action => {
      if (action.error) {
        return this.setState({
          error: action.payload.message
        })
      }

      const searchString = hardtack.get('searchString');
      const {tasks} = this.props;

      if (!searchString) {
        return this.setState({
          tasks: tasks
        })
      }

      const tasksList = _.compact(tasks.map(task => {
        return task.name.indexOf(searchString) >= 0 && task
      }));

      this.setState({
        tasks: tasksList,
        searchString
      })
    })
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleSearch = event => {
    const
      value = event.currentTarget.value.toLowerCase().trim(),
      {tasks} = this.props;

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    });

    if (value === '') {
      return this.setState({
        tasks: tasks,
        searchString: value
      })
    }

    const tasksList = _.compact(tasks.map(task => {
      return task.name.indexOf(value) >= 0 && task
    }));

    return this.setState({
      tasks: tasksList,
      searchString: value
    })
  };

  handleCheckList = event => {
    this.props.getList({directoriesId: event.currentTarget.value}).then(action => {
      if (action.error) {
        return this.setState({
          error: action.payload.message
        })
      }

      const searchString = hardtack.get('searchString');
      const {tasks} = this.props;

      if (!searchString) {
        return this.setState({
          tasks: tasks
        })
      }

      const tasksList = _.compact(tasks.map(task => {
        return task.name.indexOf(searchString) >= 0 && task
      }));

      this.setState({
        tasks: tasksList,
        searchString
      })
    })
  };

  handleRemoveTask = entry => {
    if(entry.id)
      this.props.addDelete(entry.id).then(action => {
        if (action.error) {
          return this.setState({
            error: action.payload.message
          })
        }

        this.handleLoad();
      })
  };

  handleEditTask = entry => {
    this.props.addTaskObject(entry);

    this.props.toggleTaskModal({
      show    : true,
      uniqueId: 'create-task-modal',
    });
  };

  render() {
    const {searchString, error, tasks} = this.state;
    const {isFetched} = this.props;

    let
      tasksList = tasks.map(task => <div disabled key={task.id}>
        <ListGroup.Item as="li">
          <Row>
            <Col onClick={() => this.handleEditTask(task)}>
              {task.name}
            </Col>

            <Col className="text-right">
              <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => this.handleRemoveTask(task)}>Remove</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.handleEditTask(task)}>Edit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </ListGroup.Item>
      </div>);

    if (!tasks.length)
      tasksList = <Alert variant="warning">No Result..</Alert>;

    return (
      <div className="list">
        {error && <Alert variant="danger">{error}</Alert>}
        <Header
          handleSearch={this.handleSearch}
          searchString={searchString}
          handleCheckList={this.handleCheckList}
        />

        <Container>
          <x-row>
            <Col className="text-right">
              <CreateTask
                task={this.state.task}
                // onHide={() => setModalShow(false)}
                uniqueId="create-task-modal"
              />
            </Col>
          </x-row>

          <ListGroup>
            {isFetched ? (
              <ListGroup.Item disabled>Loading...</ListGroup.Item>
            ) : (
              <div>{tasksList}</div>
            )}
          </ListGroup>
        </Container>
      </div>
    )
  }
}

export default compose(
  connect(
    state => ({
      open: state.open,

      hh:     console.log('ffffffffffffff', createTaskModal),
    }),

    dispatch => ({
      dispatch,

      ...bindActionCreators({
        toggleTaskModal: createTaskModal.toggle,
        addTaskObject  : createTaskModal.addTaskObject,
      }, dispatch),
    })
  )
)(List);
