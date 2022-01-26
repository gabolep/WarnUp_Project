import { Component } from 'react';

function mostrarCarro(e) {
    console.log('a');
}

const styles = {
    button: {
        backgroundColor: '#fff',
        color: '#fff',
        padding: '10px 10px',
        border: 'none',
        cursor: 'pointer',
        visibility: 'hidden'
    }
}


class Button extends Component {
    render(){
        return(
            <button onClick = {mostrarCarro} style = {styles.button} {...this.props}>
                <img src='./trash/trash3.png' width ='28' height='30' />
            </button>
        )
    }
}

export default Button;
