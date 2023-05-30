import React, { useState } from 'react';
import buyCookieActionCreator from '../actions/buyCookieActionCreator';
import { connect } from 'react-redux';

function CookiesContainer(props) {
    const [title, setTitle] = useState('Cookie Redux Demo');

    const handleClick = () => {
        console.log('handle Click Called');
        props.buyCookieProps();
    }

    return ( 
        <div className='container m-5 p-5 text-center'>
            <h2>Cookie Redux Demo</h2>
            <h4 className='m-5'>Number of Cookies in the store : {props.numOfCookiesProps}</h4>
            <button type='button' className='btn btn-success' onClick={handleClick}>BUY A COOKIE</button>
        </div>
     );
}

// To Link react with redux -
// Step 1. create two functions - mapStateToProps and mapDispatchToProps,

// State of the Redux Store as the parameter
const mapStateToProps = (state) => {
    return {
        numOfCookiesProps: state.numOfCookies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCookieProps: ()=>dispatch(buyCookieActionCreator())
    }
}

// Step 2. create a HOC - Higher order Function by using the connect function of react-redux library
// This will attach 2 props(numOfCookieProps, buyCookiesProps) to this component and gives us a HOC.

export default connect(mapStateToProps, mapDispatchToProps)(CookiesContainer);