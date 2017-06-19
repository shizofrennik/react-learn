import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../../store/cards'
import CommentForm from '../../components/comment/CommentForm'

const mapStateToProps = state => {
    let { user } = state.modal;
    return {
        user
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)