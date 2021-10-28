import './App.css';
import React from 'react';

class Register extends React.Component {
    state = { 
                firstName: 'John',
                lastName: 'Doe'
            }

    render() {
        return (
            <div className="App">
                <form>
                    <span className="formtext">Info:</span>
                        <input 
                        type="text" 
                        value={this.Register.firstName}
                        placeholder="First Name" 
                        required 
                    />
                    <span className="formtext">Info:</span>
                        <input 
                        type="text" 
                        value={this.Register.lastName}
                        placeholder="Last Name" 
                        required 
                    />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;