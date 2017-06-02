import React from 'react'

export default class ColumnHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            edit: false
        }
    }

    _editHeader() {
        this.setState({
            edit: true
        });
    }

    _headerUpdate() {
        let column = this.props.column;
        column.title = this.headerInput.value;
        this.props.update(column);
        this.setState({
            edit: false
        });
    }

    render() {
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
}