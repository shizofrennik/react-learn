import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../../store/cards'
import CardTitle from '../../components/card/CardTitle'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardTitle)