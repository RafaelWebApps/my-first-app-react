import React from 'react';


class AddItem extends React.Component {
   
    render() {
        return (
            <form onSubmit={this.props.submitItem}>
                <label>
                    Item:
                    <input
                        name="item"
                        type="text"
                        value={this.props.item.nome}
                        onChange={this.props.changeItem}
                    />
                </label> <br/>
                <label>
                    Marca:
                    <input
                        name="marca"
                        type="text"
                        value={this.props.item.marca}
                        onChange={this.props.changeItem}
                    />
                </label><br/>
                <label>
                    Quantidade:
                    <input
                        name="quantidade"
                        type="text"
                        value={this.props.item.quant}
                        onChange={this.props.changeItem}
                    />
                </label><br/>
                <input type="submit" value="Adicionar" />
            </form>
        )
    }
}

export default AddItem;