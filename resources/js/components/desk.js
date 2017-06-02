import React from 'react';
import Modal from './modal';
import Column from './column/column';

export default class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            user: null,
            columns: null,
            lastUpdated: new Date(),
            modalContent: null
        };
    }

    componentWillMount() {
        let user = localStorage.getItem('user'),
            showModal = !user;

        let columns = localStorage.getItem('columns'),
            string = JSON.stringify([{id: 1, title: 'TODO', cards: []}, {id: 2, title: 'In Progress', cards: []}, {id: 3, title: 'Testing', cards: []}, {id: 4, title: 'Done', cards: []}]);

        if(!columns) localStorage.setItem('columns', string);

        this.setState({
            showModal,
            user,
            columns: JSON.parse(localStorage.getItem('columns'))
        });
    }
    
    _closeByEsc(e) {
        if (e.keyCode === 27 && this.state.showModal) {
            this._toggleModal();
        }
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this._closeByEsc.bind(this));
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this._closeByEsc.bind(this));
    }

    _toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    
    _showModal() {
        this.setState({
            showModal: true
        })
    }

    _setModalContent(content) {
        this.setState({
            content
        });
    }

    _getModalContent() {
        return this.state.content
    }

    _updateUser(name) {
        localStorage.setItem('user', name);
        this.setState({
            user: name,
            showModal: false
        })
    }

    _updateColumn(column) {
        let columns = JSON.parse(localStorage.getItem('columns')); 
        columns.forEach((item, i) =>  {
            if(item.id == column.id) {
                columns[i] = column;
            }
        });
        localStorage.setItem('columns', JSON.stringify(columns));
        //temporary crutch for real-time rendering
        this.setState({
            lastUpdated: new Date()
        })

    }

    _getColumns() {
        return this.state.columns.map((column) => {
            return (<Column column={column}
                            setModalContent={this._setModalContent.bind(this)}
                            toggleModal={this._toggleModal.bind(this)}
                            showModal={this._showModal.bind(this)}
                            update={this._updateColumn.bind(this)}
                            user={this.state.user}
                            key={column.id}/>)
        })
    }
    
    _getModal() {
        return (this.state.showModal) ? 
               (<Modal show={this.state.showModal}
                       toggle={this._toggleModal.bind(this)}
                       onKeyUp={this._toggleModal.bind(this)}
                       user={this.state.user}
                       updateUser={this._updateUser.bind(this)}
                       getModalContent={this._getModalContent.bind(this)}
               />) : null
    }

    render() {
        return (
            <div>
                <h1>{this.state.user ? `Welcome ${this.state.user}` : 'Please sign in!'}</h1>
                <div className="row">
                    {this._getColumns()}
                </div>
                {this._getModal()}
            </div>
        )
    }
}