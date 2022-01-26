import { Component } from 'react';

const styles = {
    title: {
        fontWeight: '630',
        fontSize: '4rem',
    },
    subtitle:{
        fontWeight: '300',
        fontSize: '1.3rem',
        paddingLeft: '5px',
    }
}

class Title extends Component{
    render(){
        return(
            <div>
                <div style = {styles.title}>
                    HN Feed
                </div>
                <div style = {styles.subtitle}>
                    We {'<3'} hacker news!
                </div>
            </div>
            
            
        ) 
    }
}

export default Title