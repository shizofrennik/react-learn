import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalFunc, setModalContent, updateCard, deleteCard } from '../../actions';
import CardModal from './card-modal';

class Card extends React.Component {
    _delete() {
        let { column, card, deleteCard } = this.props;
        deleteCard(column, card);
    }

    _setModalContent() {
        this.props.setModalContent(<CardModal card={this.props.card}
                                              column={this.props.column}/>);
        this.props.showModalFunc();
    }
    
    _updateCard() {
        this.props.updateCard(this.props.column, this.props.card)
    }
    
    render() {
        let card = this.props.card;
        return (<section className="card clearfix">
                    <div  className="card__body" onClick={this._setModalContent.bind(this)}>
                        <span>{card.title ? card.title : '...'}</span>
                        <div className="card__comments">comments: {card.comments.length > 0 ? card.comments.length : 'none'}</div>
                    </div>
                    <span className="card__close glyphicon glyphicon-remove"
                          onClick={this._delete.bind(this)}>
                    </span>
                </section>)
    }
}

Card.propTypes = {
    user: PropTypes.string,
    card: PropTypes.object.isRequired,
    column: PropTypes.object.isRequired,
    deleteCard: PropTypes.func.isRequired,
    setModalContent: PropTypes.func.isRequired,
    showModalFunc: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    let { user } = state.modal;
    return {
        user,
        cards: state.cards 
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setModalContent,
        showModalFunc,
        updateCard,
        deleteCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)