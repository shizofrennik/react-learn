import React from 'react';

export default class CardTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            value: ''
        };
    }

    _handleChange(e) {
        this.setState({value: e.target.value});
    }

    _titleUpdate() {
        let card = this.props.card;
        card.title = this.state.value;
        this.props.updateCard(card);
        this.setState({
            edit: false,
            value: ''
        });
    }

    _editTitle() {
        this.setState({
            edit: true
        });
    }
    
    render() {
        let card = this.props.card;
        if(this.state.edit) {
            return (<div className="form-group">
                <input onChange={ this._handleChange.bind(this)}
                       className="form-control"
                       placeholder="Title..."
                       defaultValue={card.title}
                       onBlur={this._titleUpdate.bind(this)}/>
            </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editTitle.bind(this)}>
                {card.title ? card.title : "..."}
            </h4>)
        }
    }
} 