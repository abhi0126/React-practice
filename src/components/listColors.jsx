import React, { Component } from 'react';

class ListColors extends Component {
    state = { 
        title: 'ListColors Component',
        allColors: ['Red', 'Blue', 'Green']
     } 
    render() { 
        return (
            <React.Fragment>
                <div className='container'>
                    <h2 className='text-success'>{this.state.title}</h2>
                    <ul className='list-group'>
                        {/* {this.state.allColors.map((color)=>(
                            <li className='list-group-item' key={color}>{color}</li>
                        ))} */}
                        {this.returnAllColors()}
                    </ul>
                </div>
            </React.Fragment>
        );
    }

    returnAllColors() {
        return this.state.allColors.map((color)=>(
            <li className='list-group-item' key={color}>{color}</li>
        ))
    }
}
 
export default ListColors;