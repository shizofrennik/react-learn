const React = require('react');
import { Comment } from './comment'

export class CardModal extends React.Component {
    constructor() {
        super();
        this.state = {
            editTitle: false,
            editDescription: false,
            comments: null
        };
    }

    componentWillMount() {
        this.setState({
            comments: this.props.card.comments.length
        });
    }

    _titleUpdate() {
        let card = this.props.card;
        card.title = this.titleInput.value;
        this.props.updateCard(card);
        this.setState({
            editTitle: false
        });
    }

    _descriptionUpdate() {
        let card = this.props.card;
        card.description = this.descInput.value;
        this.props.updateCard(card);
        this.setState({
            editDescription: false
        });
    }
    
    _createComment() {
        let body = this.commentInput.value;
        let card = this.props.card;
        (card.comments.length > 0) ? card.comments.push({id: 1 + card.comments.length, body, owner: this.props.user}) : card.comments.push({id: 1, body, owner: this.props.user});
        this.props.updateCard(card);
        //косталь для рендеринга при обновлении
        this.setState({
            comments: card.comments.length
        });
        this.commentInput.value = '';
    }
    
    _deleteComment(id) {
        let card = this.props.card;
        card.comments.forEach((comment, i) => {
            if(comment.id == id) {
                card.comments.splice(i, 1);
            }
        });
        this.props.updateCard(card);
        //косталь для рендеринга при обновлении
        this.setState({
            comments: card.comments.length
        });
    }
    
    _updateComment(comment) {
        let card = this.props.card;
        card.comments.forEach((item, i) => {
            if(item.id == comment.id) {
                card.comments[i] = comment;
            }
        });
        this.props.updateCard(card);
    }
    
    _editTitle() {
        this.setState({
            editTitle: true
        });
    }

    _editDescription() {
        this.setState({
            editDescription: true
        });
    }

    _title() {
        let card = this.props.card;
        if(this.state.editTitle) {
            return (<div className="form-group">
                <input ref={(input) => { this.titleInput = input; }}
                       className="form-control"
                       defaultValue={card.title ? card.title : "Title..."}
                       onBlur={this._titleUpdate.bind(this)}/>
            </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editTitle.bind(this)}>
                {card.title ? card.title : "Title..."}
            </h4>)
        }
    }

    _description() {
        let card = this.props.card;
        if(this.state.editDescription) {
            return (<div className="form-group">
                <input ref={(input) => { this.descInput = input; }}
                       className="form-control"
                       defaultValue={card.description ? card.description : "Description..."}
                       onBlur={this._descriptionUpdate.bind(this)}/>
            </div>)
        } else {
            return (<p
                        onClick={this._editDescription.bind(this)}>
                {card.description ? card.description : "Description..."}
            </p>)
        }
    }

    _comments() {
        let card = this.props.card;
        if(card.comments) {
            return card.comments.map(comment => (<Comment delete={this._deleteComment.bind(this)} 
                                                          comment={comment} 
                                                          update={this._updateComment.bind(this)}
                                                          key={comment.id}/>))
        }
    }

    render() {
        let card = this.props.card;
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={this.props.toggle}>&times;</button>
                    {this._title()}
                </div>
                <div className="modal-body">

                    {this._description()}
                    <br/>
                    {this._comments()}

                    <div className="form-inline">
                        <label htmlFor="comment">Add comment:</label>&nbsp;
                        <input ref={(input) => { this.commentInput = input; }}
                               id="comment"
                               className="form-control" />&nbsp;
                        <button type="button"
                                className="btn btn-default"
                                onClick={this._createComment.bind(this)}>Post comment</button>
                    </div>

                    <br/>
                    <p>Card was created: {card.owner}</p>
                </div>

                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                            onClick={this.props.toggle}>Close</button>
                </div>
            </div>
        )
    }
}