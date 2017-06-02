import React from 'react';
import Comment from '../comment/comment';
import CardDescription from './card-description';
import CardTitle from './card-title';
import CommentForm from '../comment/comment-form';

export default class CardModal extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: null
        };
    }

    componentWillMount() {
        this.setState({
            comments: this.props.card.comments.length
        });
    }
    
    _updateCommentsCount() {
        this.setState({
            comments: this.props.card.comments.length
        });
    }

    _comments() {
        let card = this.props.card;
        if(card.comments) {
            return card.comments.map(comment => (<Comment comment={comment} 
                                                          update={this.props.updateCard}
                                                          card={card}
                                                          updateComments={this._updateCommentsCount.bind(this)}
                                                          key={comment.id}/>))
        }
    }

    render() {
        let card = this.props.card;
        let update = this.props.updateCard;
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={this.props.toggle}>&times;</button>

                    <CardTitle card={card} 
                               updateCard={update}/>
                </div>
                <div className="modal-body">
                    <CardDescription card={card} 
                                     updateCard={this.props.updateCard}/>

                    <br/>

                    {this._comments()}

                    <CommentForm card={card} 
                                 updateCard={update}
                                 user={this.props.user}
                                 updateComments={this._updateCommentsCount.bind(this)}/>

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