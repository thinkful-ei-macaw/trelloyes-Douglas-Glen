import React, { Component } from 'react';
import Card from './Card';
import './List.css';

class List extends Component {

    render() {

        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {<button type="button" onClick={() => this.props.addButton(this.props.id)}>Add Random Card</button>}
                    {this.props.cards.map(x => <Card title={x.title} content={x.content} id={x.id} button={this.props.button} addButton={this.props.addButton}></Card>)}

                </div>
            </section>
        )


    }

}

export default List;

