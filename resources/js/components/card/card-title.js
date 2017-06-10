import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCard } from '../../actions';

class CardTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            value: ''
        };
    }

    _handleChange(e) {
        this.setState({value: e.target.value});
    }

    _titleUpdate() {
        let { card, column } = this.props;
        card.title = this.state.value;
        this.props.updateCard(column, card);
        this.setState({
            edit: false,
            value: ''
        });
    }

    _editTitle() {
        this.setState({
            edit: true
        });
    }
    
    render() {
        let card = this.props.card;
        if(this.state.edit) {
            return (<div className="form-group">
                <input onChange={ this._handleChange.bind(this)}
                       className="form-control"
                       placeholder="Title..."
                       defaultValue={card.title}
                       onBlur={this._titleUpdate.bind(this)}/>
            </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editTitle.bind(this)}>
                {card.title ? card.title : "..."}
            </h4>)
        }
    }
}

CardTitle.propTypes = {
    column: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    updateCard: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardTitle)