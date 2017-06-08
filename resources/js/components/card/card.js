import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalFunc, setModalContent } from '../../actions';
import CardModal from './card-modal';

class Card extends React.Component {
    _delete() {
        this.props.delete(this.props.card.id);
    }

    _setModalContent() {
        this.props.setModalContent(<CardModal card={this.props.card}
                                              updateCard={this.props.updateCard}/>);
        this.props.showModalFunc();
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

const mapStateToProps = state => {
    let { user } = state;
    return {
        user
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setModalContent,
        showModalFunc
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)