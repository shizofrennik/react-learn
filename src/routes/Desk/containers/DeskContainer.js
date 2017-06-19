import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setUser, toggleModal } from '../../../store/modal'
import Desk from '../components/Desk'

const mapStateToProps = state => {
    let { user, showModal, content } = state.modal;
    let { columns } = state.columns;
    return {
        user,
        columns,
        showModal,
        content
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setUser,
        toggleModal
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Desk)
