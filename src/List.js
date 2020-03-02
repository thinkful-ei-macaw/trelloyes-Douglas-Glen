import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(x => <Card title={x.title} content={x.content}></Card>)}
            </div>
        </section>
    )


}

export default List;

