import React from 'react';
import axios from 'axios'
import { Link} from 'react-router-dom'
import { Table } from 'reactstrap';
import {Button, Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap' 


class UserList extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            user: {},
            modal:false        }

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then(response=>{
            this.setState(()=>({
                users:response.data
            }))
        })
    }
    toggle(user) {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    console.log(user)
        this.setState({user})
    }
    render(){
        return(
            <div>
            <h2>listing users:{this.state.users.length}</h2>
            
          
                
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
               <tbody>
                
                    {this.state.users.map(user=>{
                        return <tr key={user.id}>
                            <th scope="row"> {user.id}</th>
                            <td>

                                <Link to={"/user"} onClick={() => {
                                    this.toggle(user)
                                }} >
                                    {user.name}
                                </Link>

                            </td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}   
                </tbody>
                </Table>
                   
                    <Modal isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            
                            <Table>
                                <tbody>
                            
                                    <tr>
                                        <td>name:{this.state.user.name}</td>
                                    </tr>
                                   <tr>
                                        <td>email:{this.state.user.email}</td></tr> 
                                   <tr>
                                        <td>website:{this.state.user.website}</td></tr> 
                                   <tr>
                                        <td>phone:{this.state.user.phone}</td>
                                    </tr> 
                                  
                                </tbody>
                                </Table>
                            
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            
            </div>
        )
    }
}

export default UserList