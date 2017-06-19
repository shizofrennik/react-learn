import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateColumn } from '../../../../store/columns'
import ColumnHeader from '../../components/column/ColumnHeader'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateColumn
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ColumnHeader)