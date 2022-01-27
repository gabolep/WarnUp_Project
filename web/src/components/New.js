import axios from 'axios';
import { Component } from 'react';
import './Row.css'

const styles = {
    new: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        borderBottom: 'solid 1px #ccc'
    },
    story_title: {
        fontWeight: '600',
        fontSize: '13pt',
        paddingTop: '15px',
        paddingLeft: '15px',
        color: '#333',
        width:'100%'
    },
    author: {
        fontWeight: '600',
        fontSize: '13pt',
        paddingLeft: '5px',
        color: '#999',
    },
    created_at: {
        fontWeight: '600',
        fontSize: '13pt',
        right: '250px',
        marginRight: '10px',
        color: '#333',
        paddingTop: '15px',
        width:'10%',
    },
    
}

class New extends Component{

    

    openNew = (n) =>{
        let URL = n.url;
        if(URL == null){
            URL = n.story_url;
        }
        window.open(URL, '_blank');
    }
    deleteNew = (n,e) => {
        
        const id = n.story_id;
        const url = 'http://localhost:4000/new/update/' + id;
        axios.put(url);
        
        let button = e.target;
        
        let row = button.parentElement.parentElement.parentElement;
        row.remove();
    }
    render(){
        //update every hour
        setInterval(function() {
            const date = new Date();
            const minutes = date.getMinutes();
            const second = date.getSeconds();
            if(minutes === 0 && second === 6){
                window.location.reload(true);
            }
          }, 1000);
        const  {n}  = this.props
        //fix date
        let date; 
        
        const dateServer = new Date(n.created_at);
        const dayNew = dateServer.getDate();
        const monthNew = dateServer.getMonth() + 1;
        const yearNew = dateServer.getFullYear();

        const dateToday = new Date();
        const dayToday = dateToday.getDate();
        const monthToday = dateToday.getMonth() + 1;
        const yearToday = dateToday.getFullYear();
        var yesterday = new Date(new Date().setDate(new Date().getDate()-1));
        const yesterdayDay = yesterday.getDate();
        const yesterdayMonth = yesterday.getMonth() + 1;
       

       
        if(dayNew === dayToday && monthNew === monthToday && yearNew === yearToday ){
            let hourNew = dateServer.getHours();
            const minutesNew = dateServer.getMinutes();
            if(hourNew < 12){
                if(minutesNew < 10){
                    date = hourNew.toString() +":0"+ minutesNew.toString() + " am";
                }else{
                    date = hourNew.toString() +":"+ minutesNew.toString() + " am";
                }
            }else{
                if(hourNew !== 12){
                    hourNew = hourNew - 12;
                }
                if(minutesNew < 10){
                    date = hourNew.toString() +":0"+ minutesNew.toString() + " pm";
                }else{
                    date = hourNew.toString() +":"+ minutesNew.toString() + " pm";
                }
            }
        }else if( dayNew === yesterdayDay && monthNew === yesterdayMonth){
            date = "yesterday";
        }else{
            let monthName;
            if(monthNew === 1){
                monthName = 'Jan'
            }else if(monthNew === 2){
                monthName = 'Feb'
            }else if(monthNew === 3){
                monthName = 'Mar'
            }else if(monthNew === 4){
                monthName = 'Apr'
            }else if(monthNew === 5){
                monthName = 'May'
            }else if(monthNew === 6){
                monthName = 'Jun'
            }else if(monthNew === 7){
                monthName = 'Jul'
            }else if(monthNew === 8){
                monthName = 'Aug'
            }else if(monthNew === 9){
                monthName = 'Sep'
            }else if(monthNew === 10){
                monthName = 'Oct'
            }else if(monthNew === 11){
                monthName = 'Nov'
            }else if(monthNew === 12){
                monthName = 'Dec'
            }
            date = monthName + " "+ dayNew.toString();

            
        }
        //title
        let title;
        if(n.title !== null){
            title = n.title;
        }else{
            title = n.story_title;
        }
    
        if(n.state === true){
            return(
                //row
                <tr  className="row" value={n.url} style = {styles.new}>
                    {/*title and author*/}
                    <td style = {styles.story_title} onClick={() => this.openNew(n)} > {title} <span style = {styles.author}>-{n.author}-</span></td>
                    {/*date of the news*/}
                    <td style = {styles.created_at}  onClick={() => this.openNew(n)} >{date}</td>
                    {/*button to delete the news*/}
                    <td>
                        <button id='deleteButton' data-testid="deleteButton" className="deleteButton" onClick = {(e) => this.deleteNew(n,e)}  {...this.props}>
                            <img src='./trash/trash3.png' alt="a" width ='27' height='30' />
                        </button>  
                    </td>
                      
                </tr>            
            )
        }else{
            return(
                null
            )
        }   
    }
}

export default New;