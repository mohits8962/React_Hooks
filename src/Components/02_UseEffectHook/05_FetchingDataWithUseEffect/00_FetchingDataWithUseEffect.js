import React, { Component } from 'react';
import DataFetching from './DataFetching';

class FetchingDataWithUseEffect extends Component {
    render() {
        return (
            <div>
                <h3>********* FetchingDataWithUseEffect ********</h3>
                <DataFetching/>
            </div>
        );
    }
}

export default FetchingDataWithUseEffect;
