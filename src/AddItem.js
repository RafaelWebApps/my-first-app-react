import React from 'react';


class AddItem extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            item: ''
        };        
    } */

    
    render() {
        return (
            <form onSubmit={this.props.submitItem}>
                <label>
                    Item:
                    <input
                        name="item"
                        type="text"
                        value={this.props.item}
                        onChange={this.props.changeItem}
                    />
                </label>
                <input type="submit" value="Adicionar" />
            </form>
        )
    }
}

export default AddItem;