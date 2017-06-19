import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../../store/cards'
import CardDescription from '../../components/card/CardDescription'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardDescription)
