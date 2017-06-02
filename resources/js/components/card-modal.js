const React = require('react');

export class CardModal extends React.Component {
    constructor() {
        super();
        this.state = {
            editTitle: false
        };
    }

    _titleUpdate() {
        let card = this.props.card;
        card.title = this.titleInput.value;
        this.props.updateCard(card);
        this.setState({
            editTitle: false
        });
    }
    
    _editTitle() {
        this.setState({
            editTitle: true
        });
    }

    _title() {
        if(this.state.editTitle) {
            return (<div className="form-group">
                <input ref={(input) => { this.titleInput = input; }}
                       className="form-control"
                       defaultValue={this.props.card.title}
                       onBlur={this._titleUpdate.bind(this)}/>
            </div>)
        } else {
            return (<h4 className="column__header"
                        onClick={this._editTitle.bind(this)}>
                {this.props.card.title}
            </h4>)
        }
    }

    render() {
        let card = this.props.card;
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggle}>&times;</button>
                    {this._title()}
                </div>
                <div className="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.toggle}>Close</button>
                </div>
            </div>
        )
    }
}