import { connect } from 'react-redux'
import UserProfile from '../components/UserProfile'

const mapStateToProps = state => {
    let { user } = state.modal;
    let { columns } = state.columns;
    return {
        user,
        columns,
        cards: state.cards
    }
};

export default connect(mapStateToProps)(UserProfile)
