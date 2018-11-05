import React, {Component} from 'react';

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
                        <a href="" className="btn btn-link" style={{marginLeft: '5%'}} data-toggle="modal"
                           data-target="#myModal">Quên mật khẩu?</a>
                    </div>

                    <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Quên mật khẩu</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Nhập email để chúng tôi có thể gửi thư xác nhận và giúp bạn khôi phục lại mật
                                        khẩu</p>

                                    <div className="form-group" style={{marginLeft: '10%'}}>
                                        <label htmlFor="email">Nhập lại email:</label>
                                        <input type="email" className="form-control" id="email" style={{width: '90%'}}
                                               placeholder="Nhập email" name="email" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary"><a href="change_pwd.html"
                                                                                         style={{color: 'white'}}>Gửi</a>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft: '35%'}}>Đăng nhập</button>
                </form>
            </div>
        );
    }
}

export default Login;