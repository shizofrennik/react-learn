let React = require('react');

export class Modal extends React.Component {

    _show() {
        return this.props.show ? {display: 'block'} : {display: 'none'};
    }

    _saveUser() {
        this.props.updateUser(this.userInput.value);
    }

    _modalContent() {
        if(!this.props.user) {
            return (<div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggle}>&times;</button>
                            <h4 className="modal-title">Enter your name:</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input ref={(input) => { this.userInput = input; }} id="name" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this._saveUser.bind(this)}>Save</button>
                        </div>
                    </div>)
        } else {
            return this.props.getModalContent();
            // return (<div className="modal-content">
            //             <div className="modal-header">
            //                 <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggle}>&times;</button>
            //                 <h4 className="modal-title">Modal Header</h4>
            //             </div>
            //             <div className="modal-body">
            //                 <p>Some text in the modal.</p>
            //             </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.toggle}>Close</button>
            //             </div>
            //         </div>)
        }
    }

    render() {
        return (
            <div id="myModal" className="modal fade in" role="dialog" style={this._show()}>
                <div className="modal-dialog">
                    {this._modalContent()}
                </div>
            </div>
        )
    }
}