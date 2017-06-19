import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../../store/cards'
import CommentBody from '../../components/comment/CommentBody'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CommentBody)