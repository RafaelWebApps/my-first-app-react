import React from 'react';

class ShowItens extends React.Component{
    btDelete(item){
        return <button onClick={(e)=>this.props.itemDelete(item, e)} >x</button>
    }

    btUpdate(item){
        return<button onClick={(e)=>this.props.updateItem(item, e)}>E</button>
    }
    
    getList(){
        let strList = this.props.itens;
        return strList.map(item=>{
            return <li key={item}> 
                { item }
                {this.btUpdate(item)}
                {this.btDelete(item) }
            </li>
        })
    }

    render(){
        return(            
            <ul>
                {this.getList()}
            </ul>            
        );
    }
}

export default ShowItens;