import React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    _handleChange(e) {
        this.setState({value: e.target.value});
    }

    _createComment() {
        let body = this.state.value;
        let card = this.props.card;
        (card.comments.length > 0) ? card.comments.push({id: 1 + card.comments.length, body, owner: this.props.user}) : card.comments.push({id: 1, body, owner: this.props.user});
        this.props.updateCard(card);
        //temporary crutch for real-time rendering
        this.props.updateComments();

        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <div className="form-inline">
                <label htmlFor="comment">Add comment:</label>&nbsp;
                <input onChange={ this._handleChange.bind(this) }
                       id="comment"
                       value={this.state.value}
                       className="form-control" />&nbsp;
                <button type="button"
                        className="btn btn-default"
                        onClick={this._createComment.bind(this)}>Post comment</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let { user } = state;
    return {
        user
    }
};

export default connect(mapStateToProps)(CommentForm)