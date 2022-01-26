import { Component } from 'react';

//components
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import News from './components/News';
import Footer from './components/Footer';

class App extends Component {

  render(){
    return(
      <div>
        <Navbar/>
        <Layout>
          <News/>
        </Layout>
        <Footer/>
      </div>
    )
  }
  
}

export default App;
