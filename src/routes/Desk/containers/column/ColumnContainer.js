import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateColumn } from '../../../../store/columns'
import { addCard } from '../../../../store/cards'
import Column from '../../components/column/Column'

const mapStateToProps = state => {
    let { user } = state.modal;
    return {
        user,
        cards: state.cards
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateColumn,
        addCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Column)