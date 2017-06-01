let React = require('react');
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
            return cards.map((card) => <Card card={card} key={card.id} delete={this._deleteCard.bind(this)}/>);
        }

    }

    _header() {
        if(this.state.edit) {
            return (<div className="form-group">
                        <input ref={(input) => { this.headerInput = input; }}
                               className="form-control"
                               defaultValue={this.props.column.title}
                               onBlur={this._headerUpdate.bind(this)}/>
                    </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editHeader.bind(this)}>
                            {this.props.column.title}
                    </h4>)
        }
    }

    _cardForm() {
        if (this.state.newCard) {
            return <CardForm cancel={this._cancelCard.bind(this)} save={this._saveCard.bind(this)}/>
        }
    }

    _saveCard(title) {
        console.log(title);
        let column = this.props.column;
        (column.cards) ? column.cards.push({id: 1 + column.cards.length, title}) : column.cards = [{id: 1, title}];
        this.props.update(column);
        this.setState({
            newCard: false
        });
    }
    
    _deleteCard(id) {
        console.log('id' + id);
        let column = this.props.column;
        column.cards.forEach((card, i) => {
            if(card.id = id) {
                console.log(column.cards[i]);
                console.log('card id:' + card.id, 'passed id: ' + id);
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
                <button type="button" className="btn btn-default" onClick={this._addCard.bind(this)}>Add card</button>
            </section>
        )
    }
}