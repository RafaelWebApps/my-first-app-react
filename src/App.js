import React from 'react';
import './App.css';
import AddItem from './AddItem';
import ShowList from './ShowList';
import LocalForage from './LfConfig';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      itens: [],
      produto:{
        item:'',
        marca:'',
        quant: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  //componentWillUnmount() {  }

  updateList() {
    let arrList = [];
    LocalForage.iterate((value, key, index) => {
      arrList.push({ id: key, data: value });
    })
      .then(() => this.setState({ itens: arrList }))
      .catch(err => console.log('Ops! aconteceu um erro' + err));
  }

  handleChange(event) { 
    switch(event.target.name){
      case 'item':
        this.setState({
          produto: {
            item:event.target.value,
            marca:this.state.produto.marca,
            quant: this.state.produto.quant

          }
        })
        break;
        case 'marca':
        this.setState({
          produto: {
            item: this.state.produto.item,
            marca: event.target.value,
            quant: this.state.produto.quant
          }
        })
        break;
      
      case 'quantidade':
        this.setState({
          produto: {
            item: this.state.produto.item,
            marca: this.state.produto.marca,
            quant: event.target.value
          }
        })
        break; 
      default:
        break;     
    }     
  }

  handleSubmit() {
    let id = Date.now();
    LocalForage.setItem(id.toString(), this.state.produto)
      .then(() => {
        this.updateList();
        //event.preventDefault();
        this.setState({
          produto: {
            item:'',
            marca: '',
            quant: ''
          }
        });
      }).catch(err => console.log(err));
  }

  handleUpdate(item) {
    let [produto]=this.state.itens.filter(elm=>elm.id === item);
    let updates = prompt('Digite o que deseja alterar neste item: ', `${produto.data.item}, ${produto.data.marca}, ${produto.data.quant}`)
    let arrUpdates = updates.split(',');
    LocalForage.setItem(item, {
      item: arrUpdates[0],
      marca: arrUpdates[1],
      quant: arrUpdates[2]

    }).then(()=>this.updateList());
  }

  handleDelete(item) {
    LocalForage.removeItem(item)
    .then(()=>{
      this.updateList();
    }).catch(err=>{
      console.log(err);      
    })
    let [nmItem] = this.state.itens.filter(elm=>elm.id === item);
    console.log(nmItem);
    
    alert('Delete o Item ' + nmItem.data.item );
  }

  render() {
    return (
      <div>
        <AddItem
          item={this.state.produto}
          changeItem={this.handleChange}
          submitItem={this.handleSubmit} />
        <ShowList
          itens={this.state.itens}
          updateItem={(item) => this.handleUpdate(item)}
          itemDelete={(item) => this.handleDelete(item)}
        />
      </div>
    )
  }
}

export default App;
