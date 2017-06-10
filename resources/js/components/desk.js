import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from './modal';
import Column from './column/column';
import { setUser, toggleModal } from '../actions';

class Desk extends React.Component {
    _closeByEsc(e) {
        if (e.keyCode === 27 && this.props.showModal) {
            this.props.toggleModal();
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
        return this.props.columns.map((column) => {
            return (<Column column={column}
                            key={column.id}/>)
        })
    }
    
    _getModal() {
        let { toggleModal, setUser } = this.props;
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

Desk.propTypes = {
    user: PropTypes.string,
    toggleModal: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
    showModal: PropTypes.bool.isRequired
};


const mapStateToProps = state => {
    let { user, showModal, content } = state.modal;
    let { columns } = state.columns;
    return {
        user,
        columns,
        showModal,
        content
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setUser,
        toggleModal
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Desk)