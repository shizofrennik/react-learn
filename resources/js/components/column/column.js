import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateColumn } from '../../actions';
import CardForm from '../card/card-form';
import Card from '../card/card';
import ColumnHeader from './column-header';

class Column extends React.Component {
    constructor() {
        super();
        this.state = {
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

    _saveCard(title) {
        let column = this.props.column;

        (column.cards.length > 0) ? column.cards.push({id: 1 + column.cards.length, title, owner: this.props.user, comments: []}) : column.cards.push({id: 1, title, owner: this.props.user, comments: []});
        this.props.updateColumn(column);

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

        this.props.updateColumn(column);
    }

    _deleteCard(id) {
        let column = this.props.column;
        column.cards.forEach((card, i) => {
            if(card.id == id) {
                column.cards.splice(i, 1);
            }
        });
        this.props.updateColumn(column);
    }

    _getCards() {
        let cards = this.state.cards;
        if(cards.length > 0) {
            return cards.map((card) => <Card card={card} 
                                             key={card.id}
                                             updateCard={this._updateCard.bind(this)}
                                             delete={this._deleteCard.bind(this)}/>);
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

    render() {
        return (
            <section className="column col-sm-2">
                <ColumnHeader column={this.props.column} />
                <hr/>
                {this._getCards()}
                {this._cardForm()}
                <br/>
                {this._addCardButton()}
            </section>
        )
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
        updateColumn
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Column)