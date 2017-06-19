import React from 'react'
import PropTypes from 'prop-types';

export default class ColumnHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            edit: false,
            value: ''
        }
    }

    _handleChange(e) {
        this.setState({value: e.target.value});
    }

    _editHeader() {
        this.setState({
            edit: true
        });
    }

    _headerUpdate() {
        let column = this.props.column;
        column.title = this.state.value;
        this.props.updateColumn(column);
        this.setState({
            edit: false,
            value: ''
        });
    }

    render() {
        let column = this.props.column;
        if(this.state.edit) {
            return (<div className="form-group">
                <input className="form-control"
                       onChange={ this._handleChange.bind(this) }
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

ColumnHeader.propTypes = {
    column: PropTypes.object.isRequired,
    updateColumn: PropTypes.func.isRequired
};