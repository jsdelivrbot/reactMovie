import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { makeGetVisibleVideos } from '../selectors'

const makeMapStateToProps = () => {
  const getVisibleVidoes = makeGetVisibleVideos()
  const mapStateToProps = (state, props) => {
    return {
      todos: getVisibleVidoes(state, props)
    }
  }
  return mapStateToProps
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleVideosList = connect(mapStateToProps, mapDispatchToProps)(Videos)

export default VisibleVideosList
