import React from 'react';

export default class CommentBody extends React.Component {
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

    _updateComment() {
        let comment = this.props.comment,
            card = this.props.card;

        comment.body = this.state.value;

        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments[i] = comment;
            }
        });

        this.props.update(card);

        this.setState({
            edit: false,
            value: ''
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
                <input onChange={ this._handleChange.bind(this) }
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