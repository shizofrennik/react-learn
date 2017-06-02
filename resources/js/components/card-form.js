const React = require('react');

export default class CardForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newCard: false
        };
    }

    _saveCard() {
        this.props.save(this.cardInput.value);
    }
    
    render() {
        return (
            <div>
                <textarea ref={(input) => { this.cardInput = input; }}
                       className="form-control"
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