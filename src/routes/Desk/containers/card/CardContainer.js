import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setModalContent, showModalFunc } from '../../../../store/modal'
import { updateCard, deleteCard } from '../../../../store/cards'
import Card from '../../components/card/Card'

const mapStateToProps = state => {
    let { user } = state.modal;
    return {
        user,
        cards: state.cards
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setModalContent,
        showModalFunc,
        updateCard,
        deleteCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)