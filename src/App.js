import React, { Component } from 'react';
import List from './List';
import Store from './store';
import './App.css';


class App extends Component {

  state = {

    store: Store

  }

  buttonClickHandle = (idToRemove) => {

    console.log('I was clicked');
    // this.state.store.lists[0].id

    let newList = (this.state.store.lists.map(list => {

      list.cardIds = list.cardIds.filter(id => id !== idToRemove)
      return list
    }));
    this.state.store.lists = newList;
    console.log(this.state.store)
    this.setState({

      store: this.state.store

    })


    // console.log(this.state.store.allCards.filter(id => this.state.store.allCards[id.id]))

  }



  render() {
    console.log(this.state.store)
    return (

      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">

          {this.state.store.lists.map(x => <List header={x.header} cards={x.cardIds.map(id => this.state.store.allCards[id])} button={this.buttonClickHandle} ></List>)}

        </div>
      </main>
    );
  }
}

export default App;
