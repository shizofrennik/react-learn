import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../../store/cards'
import Comment from '../../components/comment/Comment'


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Comment)