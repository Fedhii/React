import { connect } from 'react-redux';
import TodoList from './todo_list';

import { fetchTodos, receiveTodos, receiveTodo } from './../../actions/todo_actions';
import { allTodos } from './../../reducers/selectors';

const mapStateToProps = state => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    requestTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoList);
