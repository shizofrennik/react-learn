const React = require('react');
import { CardModal } from './card-modal';

export class Card extends React.Component {
    _delete() {
        this.props.delete(this.props.card.id);
    }

    _setModalContent() {
        this.props.setModalContent(<CardModal card={this.props.card}
                                              updateCard={this.props.updateCard}
                                              toggle={this.props.toggleModal}/>);
        this.props.showModal();
    }

    render() {
        return (<section className="card">
                    <h6 onClick={this._setModalContent.bind(this)}>{this.props.card.title}
                        <span className="pull-right" 
                              onClick={this._delete.bind(this)}>
                            x
                        </span>
                    </h6>
                </section>)
    }
}