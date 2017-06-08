import React from 'react';

export default class CardDescription extends React.Component {
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

    _editDescription() {
        this.setState({
            edit: true
        });
    }

    _descriptionUpdate() {
        let card = this.props.card;
        card.description = this.state.value;
        this.props.updateCard(card);
        this.setState({
            edit: false,
            value: ''
        });
    }
    
    render() {
        let card = this.props.card;
        if(this.state.edit) {
            return (<div className="form-group">
                <input onChange={this._handleChange.bind(this)}
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