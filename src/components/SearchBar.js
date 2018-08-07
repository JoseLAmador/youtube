import React, {Component} from 'react';

class SearchBar extends Component{

    state= {
      textInput:''
    };

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            textInput:e.target.value
        })
        this.props.onSearchTermChange(e.target.value)
    };

    render(){

        let {textInput} = this.state;
        return(
            <div className={"search-bar text-center"}>
                <input
                    type="text"
                    value={textInput}
                    name={"searchInput"}
                    placeholder={"Buscar...."}
                    onChange={this.onInputChange}

                />
            </div>

        );
    }
}

/*const SearchBar = () => {

};*/

export default SearchBar;

