import React from 'react';

export default class CardForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newCard: false,
            value: ''
        };
    }

    _saveCard() {
        this.props.save(this.state.value);
        this.setState({value: ''});
    }

    _handleChange(e) {
        this.setState({value: e.target.value});
    }
    
    render() {
        return (
            <div>
                <textarea className="form-control"
                          onChange={this._handleChange.bind(this)}
                          type="text"
                       />
                <br/>
                <button type="button" 
                        className="btn btn-success"
                        onClick={this._saveCard.bind(this)}>
                    Save
                </button>
                &nbsp;
                <button type="button" 
                        className="btn btn-danger" 
                        onClick={this.props.cancel}>
                    Cancel
                </button>
            </div>
        )
    }
}