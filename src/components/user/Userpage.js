import React, { Component } from 'react'
import './Userpage.css'
import { Link } from 'react-router-dom'

export class Userpage extends Component {
    
    constructor(){
        super();
        this.state = {
            data: [
                {
                "id": 1,
                "name": "Raj",
                "age": "20",
                "gender": "male",
                "email": "raj@gmail.com",
                "phoneNo": "9191919191"
                },
                {
                "id": 2,
                "name": "Rahul",
                "age": "22",
                "gender": "male",
                "email": "rahul@gmail.com",
                "phoneNo": "9292929292"
                },
                {
                "id": 3,
                "name": "Rohan",
                "age": "25",
                "gender": "male",
                "email": "rohan@gmail.com",
                "phoneNo": "9393939393"
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="userpage">
                
                <div className='bg-dark p-4 text-white'>
                    <div className="">
                        <h1>UserName</h1>
                    </div>
                    <div className="">
                        <Link to="/" >
                            <button className="btn btn-warning">Logout</button>
                        </Link>
                    </div>
                </div>
                
                <div class='data'>
                
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(element => {
                            return (
                                <tr>
                                    <td> {element.id} </td>
                                    <td> {element.name} </td>
                                    <td> {element.age} </td>
                                    <td> {element.gender} </td>
                                    <td> {element.email} </td>
                                    <td> {element.phoneNo} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>

                </div>
                
            </div>
        )
    }
}

export default Userpage
