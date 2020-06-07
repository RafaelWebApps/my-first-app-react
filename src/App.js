import React from 'react';
import './App.css';
import AddItem from './AddItem';
import ShowList from './ShowList';

class App extends React.Component{
  constructor(props){
    super(props)
    let strList = localStorage.getItem('buy_list');
    let arrList = (strList != null)? strList.split(','): [];
    this.state = {      
      itens:arrList,
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateList(){
    let strList = localStorage.getItem('buy_list');
    let arrList = (strList != null)? strList.split(','): [];
    this.setState({
      itens: arrList
    })
  }
handleChange(event) {
    this.setState({
        item: event.target.value
    });
}

handleSubmit(event) {
    let buy_list = localStorage.getItem('buy_list');
    let itensAnt = (buy_list != null)? `${buy_list}, `: '';
    let itens = `${itensAnt} ${this.state.item}`;
    localStorage.setItem('buy_list', itens);
    this.updateList();
    event.preventDefault();
    this.setState({
        item: ''
    });
}

handleUpdate(item){  
  let update = prompt('Digite a atualização do item: ', item)
  let list = localStorage.getItem('buy_list');
  let listUpdate = list.replace(item, update).trim();
  localStorage.setItem('buy_list', listUpdate);
  this.updateList();
  
}

handleDelete(item){
  let list = localStorage.getItem('buy_list');
  let listDel = list.replace(item, '').replace(',,', ',').trim();
  let uplist = (listDel.lastIndexOf(',')>0)? listDel.slice(0, listDel.length -1): listDel;
  localStorage.setItem('buy_list', uplist);
  this.updateList();
  alert('Delete o Item '+item)
}

  render(){
    return (
      <div>
        <AddItem 
          item={this.state.item} 
          changeItem={this.handleChange} 
          submitItem={this.handleSubmit}  />
        <ShowList         
          itens={this.state.itens}
          updateItem={(item)=>this.handleUpdate(item)}  
          itemDelete={(item)=>this.handleDelete(item)}  
        />
      </div>
    )
  }  
} 

export default App;
