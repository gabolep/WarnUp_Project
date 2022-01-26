import { Component } from 'react';
import Title from './Title';


const styles = {
    navbar: {
        backgroundColor: '#303030',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '220px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}
class Navbar extends Component{
    render() {
        return(
            
            <nav style = {styles.navbar}>
                <Title />

            </nav>
        )
    }
}
export default Navbar