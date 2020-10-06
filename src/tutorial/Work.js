import React from 'react';
import './App.css';
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';
//Calling Firebase config setting to call the data
import firebase from '../Zodongo/Firebase.js';
class App extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    }


    
  componentDidMount() {   
     
      firebase.database().ref("students-list").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
    
    
 }
  
  render(){
    console.log("pk");

  return (
    <div className="MainDiv">
      <div className="jumbotron text-center bg-sky">
          <h3>How to show firebase data in reactjs?</h3>
      </div>
    
      <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                  console.log("helops");
                
                return (
                    <tr>     
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.mobileNumber}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default App