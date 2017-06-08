import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from '../../actions';
import Comment from '../comment/comment';
import CardDescription from './card-description';
import CardTitle from './card-title';
import CommentForm from '../comment/comment-form';

class CardModal extends React.Component {
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
                            onClick={this.props.toggleModal}>&times;</button>

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
                                 updateComments={this._updateCommentsCount.bind(this)}/>
                    <br/>
                    <p>Card was created: {card.owner}</p>
                </div>

                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                            onClick={this.props.toggleModal}>Close</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleModal
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardModal)