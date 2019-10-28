import * as filterActions from "../actions/filter";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Filter from "../components/Filter/Filter";

const mapStateToProps = ({books}) => ({
    filterBy: books.filterBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
