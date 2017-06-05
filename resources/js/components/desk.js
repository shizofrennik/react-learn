import React from 'react';
import {connect} from 'react-redux'
import Modal from './modal';
import Column from './column/column';
import { setUser, showModal, toggleModal, setModalContent, updateColumn } from '../actions';

class Desk extends React.Component {
    
    _closeByEsc(e) {
        if (e.keyCode === 27 && this.props.showModal) {
            this.props.dispatcher.toggleModal();
        }
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this._closeByEsc.bind(this));
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this._closeByEsc.bind(this));
    }

    _getModalContent() {
        return this.props.content
    }

    _getColumns() {
        let { setModalContent, toggleModal, showModal, updateColumn } = this.props.dispatcher;
        return this.props.columns.map((column) => {
            return (<Column column={column}
                            setModalContent={setModalContent}
                            toggleModal={toggleModal}
                            showModal={showModal}
                            update={updateColumn}
                            user={this.props.user}
                            key={column.id}/>)
        })
    }
    
    _getModal() {
        let { toggleModal, setUser } = this.props.dispatcher;
        return (this.props.showModal) ? 
               (<Modal show={this.props.showModal}
                       toggle={toggleModal}
                       onKeyUp={toggleModal}
                       user={this.props.user}
                       updateUser={setUser}
                       getModalContent={this._getModalContent.bind(this)}
               />) : null
    }

    render() {
        return (
            <div>
                <h1>{this.props.user ? `Welcome ${this.props.user}` : 'Please sign in!'}</h1>
                <div className="row">
                    {this._getColumns()}
                </div>
                {this._getModal()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    let { user, columns, showModal, content } = state;
    return {
        user,
        columns,
        showModal,
        content
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatcher: {
            setUser: (user) => {
                dispatch(setUser(user));
            },
            showModal: () => {
                dispatch(showModal());
            },
            toggleModal: () => {
                dispatch(toggleModal());
            },
            setModalContent: (content) => {
                dispatch(setModalContent(content))
            },
            updateColumn: (column) => {
                dispatch(updateColumn(column))
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Desk)