import React from 'react';
import ReactDOM from 'react-dom'
import UserList from './userList'
import {  BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
    
    return(
        < BrowserRouter>
            <div> 
                 <UserList />
            </div>
          
        </ BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));