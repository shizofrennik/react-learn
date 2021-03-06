import React from 'react';
import PropTypes from 'prop-types';
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
        let { column, card } = this.props;
        if(card.comments) {
            return card.comments.map(comment => (<Comment comment={comment} 
                                                          card={card}
                                                          column={column}
                                                          updateComments={this._updateCommentsCount.bind(this)}
                                                          key={comment.id}/>))
        }
    }

    render() {
        let { card, column } = this.props;
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={this.props.toggleModal}>&times;</button>

                    <CardTitle card={card} 
                               column={column}/>
                </div>
                <div className="modal-body">
                    <CardDescription card={card}
                                     column={column}/>

                    <br/>

                    {this._comments()}

                    <CommentForm card={card}
                                 column={column}
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

CardModal.propTypes = {
    column: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleModal
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(CardModal)