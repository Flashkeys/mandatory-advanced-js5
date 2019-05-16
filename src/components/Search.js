import React from 'react';
import FilterResults from 'react-filter-search';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        value: ''
      };
    }
    //__________________-
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };
 //_____________________-

    render () {
        const { data, value } = this.state;

        return (
            
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <SearchResults
                    value={value}
                    data={data}
                    renderResults={results => (
                    <div>
                        {results.map(el => (
                            <div>
                                // show thumbnails
                            </div>
                        ))}
                    </div>
                    )}
                />
            </div>
        )
    }
}
export default Search;