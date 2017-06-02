const React = require('react');
import { CardModal } from './card-modal';

export class Card extends React.Component {
    _delete() {
        this.props.delete(this.props.card.id);
    }

    _setModalContent() {
        this.props.setModalContent(<CardModal card={this.props.card}
                                              user={this.props.user}
                                              updateCard={this.props.updateCard}
                                              toggle={this.props.toggleModal}/>);
        this.props.showModal();
    }

    render() {
        let card = this.props.card;
        return (<section className="card clearfix">
                    <div  className="card__body" onClick={this._setModalContent.bind(this)}>
                        <span>{card.title}</span>
                        <div className="card__comments">comments: {card.comments.length > 0 ? card.comments.length : 'none'}</div>
                    </div>
                    <span className="card__close glyphicon glyphicon-remove"
                          onClick={this._delete.bind(this)}>
                    </span>
                </section>)
    }
}