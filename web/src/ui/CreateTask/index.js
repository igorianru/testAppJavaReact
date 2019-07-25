import _ from 'lodash'
import React, {Component} from 'react'
import Modal from "react-bootstrap-modal";
import {Button, Form} from "react-bootstrap";
import {Formik} from "formik";
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/task'

import actions from './actions';

export {actions};
export {default as reducers} from './reducers';

class CreateTask extends Component {
  handleSend = entry => {
    this.props.addTask(entry).then(action => {
      // if (action.error) {
      //   return this.setState({
      //     error: action.payload.message
      //   })
      // }

      this.props.toggle({show: false, uniqueId: this.props.uniqueId})
    })
  };

  handleCreate = () => {
    this.props.addTaskObject({
      task: {
        name: '',
        from: '',
        to: '',
        status: 'penning',
        directoriesId: 1,
      },
    });

    this.props.toggle({show: true, uniqueId: this.props.uniqueId})
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleCreate()}>
          Create New Task
        </Button>
        <Modal
          show={this.props.isShown}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          className="modal-open-i"
          onHide={() => this.props.toggle({show: false, uniqueId: this.props.uniqueId})}
        >

          <Formik
            initialValues={this.props.task}
            // validationSchema={schema}
          >
            {props => (
              <div>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Create Task
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formGroupNumber">
                      <Form.Label>Number</Form.Label>
                      <Form.Control type="number" placeholder="Number" name="number" value={props.values.number}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={props.values.name}

                        onChange={props.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupFrom">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" placeholder="From" name="from" value={props.values.from}
                                    onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupTo">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="text" placeholder="To" name="to" value={props.values.to} onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formGridStatus">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        as="select"
                        value={props.values.status}
                        name="status"
                        onChange={props.handleChange}
                      >
                        <option>Choose...</option>
                        <option value="penning">Penning</option>
                        <option value="error">Error</option>
                        <option value="success">Success</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridStatus">
                      <Form.Label>List Name</Form.Label>
                      <Form.Control
                        as="select"
                        name="directories_id"
                        value={props.values.directoriesId}
                        onChange={props.handleChange}
                      >
                        <option>Choose...</option>
                        <option value="1">List First</option>
                        <option value="2">List Second</option>
                        <option value="3">List Three</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>

                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="Secondary"
                    onClick={() => this.props.toggle({show: false, uniqueId: this.props.uniqueId})}
                  >Close</Button>

                  <Button
                    variant="success"
                    onClick={() => this.handleSend(props.values)}
                  >Save</Button>
                </Modal.Footer>

              </div>
            )}
          </Formik>
        </Modal>
      </div>
    )
  }
}

export default compose(
  connect(
    (state, props) => ({
      isShown: _.get(state.editTaskModal, `${props.uniqueId}.show`, false),
      task: state.task,
      taska: console.log('statestatestatestate', state),
    }),

    dispatch => ({
      dispatch,

      ...bindActionCreators({
        toggle       : actions.toggle,
        addTaskObject: actions.addTaskObject,
        addTask      : addTask,
      }, dispatch),
    })
  )
)(CreateTask);
