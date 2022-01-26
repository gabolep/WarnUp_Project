import { Component } from 'react';
import New from './New';
import axios from 'axios';



const styles = {
    tabla: {
        backgroundColor: '#fff',
        position: 'static',
        marginTop: '40px',
        color: '#000000',
        cursor: 'pointer',
        

    },
    tr:{
        margin: 0,
        padding: 0,
        width:'100%'
    },
}
class News extends Component{
    state = {
        news: [],
    }
    componentDidMount(){
        axios.get('http://localhost:4000/new/').then(res => {
            this.setState({ news: res.data});
        });    
      }
   

    render(){
        return(
            <div style= {styles.tabla}>
                <table style= {styles.tr}>
                    <tbody>
                        { this.state.news.sort((act,pos) => {
                            const date1 = new Date(act.created_at);
                            const date2 = new Date(pos.created_at);
                            return date2.valueOf() - date1.valueOf()
                        }).map(n =>
                            <New key={n.story_id.toString()}
                                n = {n}
                            />
                        )}
                    </tbody>
                </table>
        </div>
        )}
}

export default News;
