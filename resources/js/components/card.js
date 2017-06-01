const React = require('react');

export class Card extends React.Component {
    _delete() {
        this.props.delete(this.props.card.id);
    }

    render() {
        return (<section className="card">
                    <h6>{this.props.card.title} 
                        <span className="pull-right" 
                              onClick={this._delete.bind(this)}>
                            x
                        </span>
                    </h6>
                </section>)
    }
}