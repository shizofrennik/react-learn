import React from 'react';
import CommentBody from './comment-body';

export default class Comment extends React.Component {
    
    _deleteComment() {
        let card = this.props.card,
            comment = this.props.comment;
        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments.splice(i, 1);
            }
        });
        this.props.update(card);
        //temporary crutch for real-time rendering
        this.props.updateComments();
    }

    render() {
        let comment = this.props.comment;
        return (
            <div className="comment">
                <CommentBody comment={comment}
                             update={this.props.update}
                             card={this.props.card}/>

                <br/>

                <span className="comment__owner">Writen by: {comment.owner}</span>
                <span className="comment__close glyphicon glyphicon-remove"
                      onClick={this._deleteComment.bind(this)}>
                </span>
            </div>
        )
    }
}