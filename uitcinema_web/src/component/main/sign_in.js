import React, {Component} from 'react';
import Login from './sub/login'
import Signup from './sub/signup'

class Sign_in extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#login">Đăng nhập</a></li>
                    <li><a data-toggle="tab" href="#register">Đăng ký</a></li>
                </ul>

                <div className="tab-content">
                    <div id="login" className="tab-pane fade in active">
                        <Login/>
                    </div>
                    <div id="register" className="tab-pane fade">
                        <Signup/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sign_in;