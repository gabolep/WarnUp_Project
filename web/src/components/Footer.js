import { Component } from 'react';
import React from 'react';

const styles = {
    footer: {
        backgroundColor: '#303030',
        color: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100px',
        position: 'absolute',
        bottom: '0',
        marginTop: '100px',
        textAlign: 'center',
        width: '100%'

    },
    author: {
        paddingTop: '20px',
        textAlign: 'center',
        fontWeight: '630',
        fontSize: '1rem',
    }
}
class Footer extends Component {
    render(){
        return(
            <footer data-testid="footer" style = {styles.footer} > 
                <h3 data-testid= "h3" style = {styles.author}>website created by Gabriel Escudero</h3>
            </footer> 
        )
    }
}



export default Footer;
