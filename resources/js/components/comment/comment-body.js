import React from 'react';

export default class CommentBody extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };
    }

    _updateComment() {
        let comment = this.props.comment,
            card = this.props.card;

        comment.body = this.bodyInput.value;

        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments[i] = comment;
            }
        });

        this.props.update(card);

        this.setState({
            edit: false
        });
    }
    
    _editComment() {
        this.setState({
            edit: true
        });
    }
    
    render() {
        let comment = this.props.comment;

        if(this.state.edit) {
            return (<div className="form-group">
                <input ref={(input) => { this.bodyInput = input; }}
                       className="form-control"
                       defaultValue={comment.body}
                       onBlur={this._updateComment.bind(this)}/>
            </div>)
        } else {
            return (<div className="comment__body" 
                         onClick={this._editComment.bind(this)}>{comment.body}</div>);
        }
    }
}