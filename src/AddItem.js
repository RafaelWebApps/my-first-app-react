import React from 'react';


class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        event.preventDefault();
        this.setState({
            item: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Item:
                    <input
                        name="item"
                        type="text"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Adicionar" />
            </form>
        )
    }
}

export default AddItem;