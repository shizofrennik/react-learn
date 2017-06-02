import React from 'react';

export default class CommentForm extends React.Component {

    _createComment() {
        let body = this.commentInput.value;
        let card = this.props.card;
        (card.comments.length > 0) ? card.comments.push({id: 1 + card.comments.length, body, owner: this.props.user}) : card.comments.push({id: 1, body, owner: this.props.user});
        this.props.updateCard(card);
        //temporary crutch for real-time rendering
        this.props.updateComments();
        
        this.commentInput.value = '';
    }

    render() {
        return (
            <div className="form-inline">
                <label htmlFor="comment">Add comment:</label>&nbsp;
                <input ref={(input) => { this.commentInput = input; }}
                       id="comment"
                       className="form-control" />&nbsp;
                <button type="button"
                        className="btn btn-default"
                        onClick={this._createComment.bind(this)}>Post comment</button>
            </div>
        )
    }
}