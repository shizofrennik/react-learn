import React from 'react';

export default class CardTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };
    }

    _titleUpdate() {
        let card = this.props.card;
        card.title = this.titleInput.value;
        this.props.updateCard(card);
        this.setState({
            edit: false
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
                <input ref={(input) => { this.titleInput = input; }}
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