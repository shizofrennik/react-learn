const React = require('react');
import { CardForm } from './card-form';
import { Card } from './card';

export class Column extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            newCard: false,
            cards: []
        };
    }

    componentWillMount() {
        let cards = this.props.column.cards;
        if(cards) {
            this.setState({cards});
        }
    }

    _addCard() {
        this.setState({
            newCard: true
        });
    }
    
    _cancelCard() {
        this.setState({
            newCard: false
        });
    }

    _getCards() {
        let cards = this.state.cards;
        if(cards.length > 0) {
            return cards.map((card) => <Card card={card} 
                                             key={card.id}
                                             user={this.props.user}
                                             toggleModal={this.props.toggleModal}
                                             setModalContent={this.props.setModalContent}
                                             showModal={this.props.showModal}
                                             updateCard={this._updateCard.bind(this)}
                                             delete={this._deleteCard.bind(this)}/>);
        }

    }

    _header() {
        let column = this.props.column;
        if(this.state.edit) {
            return (<div className="form-group">
                        <input ref={(input) => { this.headerInput = input; }}
                               className="form-control"
                               placeholder="Column title..."
                               defaultValue={column.title}
                               onBlur={this._headerUpdate.bind(this)}/>
                    </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editHeader.bind(this)}>
                            { column.title ? column.title : '...' }
                    </h4>)
        }
    }

    _cardForm() {
        if (this.state.newCard) {
            return <CardForm cancel={this._cancelCard.bind(this)} 
                             save={this._saveCard.bind(this)}/>
        }
    }
    
    _addCardButton() {
        return this.state.newCard ? null : (<button type="button"
                                                    className="btn btn-default"
                                                    onClick={this._addCard.bind(this)}>
                                                Add card
                                            </button>);
    }

    _saveCard(title) {
        let column = this.props.column;
        
        (column.cards.length > 0) ? column.cards.push({id: 1 + column.cards.length, title, owner: this.props.user, comments: []}) : column.cards.push({id: 1, title, owner: this.props.user, comments: []});
        this.props.update(column);
        
        this.setState({
            newCard: false
        });
    }
    
    _updateCard(card) {
        let column = this.props.column;
        column.cards.forEach((item, i) => {
            if(item.id == card.id) {
                column.cards[i] = card;
            }
        });
        
        this.props.update(column);
    }
    
    _deleteCard(id) {
        let column = this.props.column;
        column.cards.forEach((card, i) => {
            if(card.id == id) {
                column.cards.splice(i, 1);
            }
        });
        this.props.update(column);
    }

    _headerUpdate() {
        let column = this.props.column;
        column.title = this.headerInput.value;
        this.props.update(column);
        this.setState({
            edit: false
        });
    }

    _editHeader() {
        this.setState({
            edit: true
        });
    }

    render() {
        return (
            <section className="column col-sm-2">
                {this._header()}
                <hr/>
                {this._getCards()}
                {this._cardForm()}
                <br/>
                {this._addCardButton()}
            </section>
        )
    }
}