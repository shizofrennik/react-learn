import React from 'react';

export default class CardDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };
    }

    _editDescription() {
        this.setState({
            edit: true
        });
    }

    _descriptionUpdate() {
        let card = this.props.card;
        card.description = this.descInput.value;
        this.props.updateCard(card);
        this.setState({
            edit: false
        });
    }
    
    render() {
        let card = this.props.card;
        if(this.state.edit) {
            return (<div className="form-group">
                <input ref={(input) => { this.descInput = input; }}
                       className="form-control"
                       placeholder="Description"
                       defaultValue={card.description}
                       onBlur={this._descriptionUpdate.bind(this)}/>
            </div>)
        } else {
            return (<p
                onClick={this._editDescription.bind(this)}>
                {card.description ? card.description : "Description..."}
            </p>)
        }
    }
}