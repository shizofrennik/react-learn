import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { toggleModal } from '../../../../store/modal'
import CardModal from '../../components/card/CardModal'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleModal
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardModal)
