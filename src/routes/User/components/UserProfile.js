import React from 'react'

export default class UserProfile extends React.Component {
    _getInfo() {
        let {user, cards, columns } = this.props;
        if(user) {
            return (
                <div>
                    <p>Now you have {columns.length} columns.</p>
                    <p>And {cards.length} cards.</p>
                </div>
            )
        }
    }

    render() {
        let { user } = this.props;
        return (
            <div>
                <h4>Welcome {user ? user : 'guest'}</h4>
                {this._getInfo()}
            </div>
        )
    }
}
