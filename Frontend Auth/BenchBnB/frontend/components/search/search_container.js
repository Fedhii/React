import { connect } from 'react-redux';

import { asArray } from './../../reducers/selectors';
import { updateFilter } from './../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
    benches: anArray(state.entities),
    minSeating: state.ui.filters.minSeating,
    maxSeating: state.ui.filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)