import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCard } from '../../actions';
import CommentBody from './comment-body';

class Comment extends React.Component {
    
    _deleteComment() {
        let { card, column, comment } = this.props;
        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments.splice(i, 1);
            }
        });
        this.props.updateCard(column, card);
        //temporary crutch for real-time rendering
        this.props.updateComments();
    }

    render() {
        let { comment, column } = this.props;
        return (
            <div className="comment">
                <CommentBody comment={comment}
                             column={column}
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

Comment.propTypes = {
    column: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    updateComments: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Comment)