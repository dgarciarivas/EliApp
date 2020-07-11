import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');

    class App extends React.Component{
        constructor(){
          super();
          this.state = {
            text: "Hello",
            name: 'Eli',
          }
        }
      
        render(){
          
           return(
                 <div className="App">  
                   <div> {this.state.text} {this.state.name}</div>
                  </div>
                )
               
            }
}  

    ReactDOM.render(
        <App />, rootEl
    );




// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}