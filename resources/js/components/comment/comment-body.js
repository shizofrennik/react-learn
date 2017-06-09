import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCard } from '../../actions';

class CommentBody extends React.Component {
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
        let { comment, card, column } = this.props;

        comment.body = this.state.value;

        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments[i] = comment;
            }
        });

        this.props.updateCard(column, card);

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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateCard
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CommentBody)