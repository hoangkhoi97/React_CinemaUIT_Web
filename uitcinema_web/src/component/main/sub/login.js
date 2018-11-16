import React, {Component} from 'react';
import {Link} from  'react-router-dom'
class Login extends Component {
    render() {
        return (
            <div>
                <h3>Đăng nhập</h3>
                <form>
                    <div className="form-group" style={{marginLeft:'35%'}}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" style={{width:'40%'}}
                               placeholder="Nhập email" name="email" />
                    </div>
                    <div className="form-group" style={{marginLeft: '35%'}}>
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" style={{width: '40%'}}
                               placeholder="Nhập password" name="pwd" />
                    </div>
                    <div className="checkbox" style={{marginLeft: '35%'}}>
                        <label><input type="checkbox" name="remember" /> Nhớ tên tài khoản</label>
                        <Link to="/forgot_pass"  className="btn btn-link" style={{marginLeft: '5%'}} data-toggle="modal"
                           >Quên mật khẩu?</Link>
                    </div>


                    <button type="submit" className="btn btn-primary" style={{marginLeft: '35%'}}>Đăng nhập</button>
                </form>
            </div>
        );
    }
}

export default Login;