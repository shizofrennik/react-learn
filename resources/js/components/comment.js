const React = require('react');

export class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };
    }

    _deleteComment() {
        this.props.delete(this.props.comment.id);
    }

    _updateComment() {
        let comment = this.props.comment;
        comment.body = this.bodyInput.value;
        this.props.update(comment);

        this.setState({
            edit: false
        });
    }

    _editComment() {
        this.setState({
            edit: true
        });
    }

    _commentBody() {
        let comment = this.props.comment;

        if(this.state.edit) {
            return (<div className="form-group">
                <input ref={(input) => { this.bodyInput = input; }}
                       className="form-control"
                       defaultValue={comment.body}
                       onBlur={this._updateComment.bind(this)}/>
            </div>)
        } else {
            return (<div className="comment__body" onClick={this._editComment.bind(this)}>{comment.body}</div>);
        }
    }
    
    render() {
        let comment = this.props.comment;
        return (
            <div className="comment">
                {this._commentBody()}
                <br/>
                <span className="comment__owner">Writen by: {comment.owner}</span>
                <span className="comment__close glyphicon glyphicon-remove"
                      onClick={this._deleteComment.bind(this)}>
                </span>
            </div>
        )
    }
}