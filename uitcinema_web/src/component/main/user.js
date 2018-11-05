import React, {Component} from 'react';
import Sub_user from './sub/sub_user'

class User extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h3>Thông tin người dùng</h3>
                    <br />
                    <div className="row whiteframe" style={{paddingTop: '30px', paddingBottom: '50px'}}>
                        <div className="center-block">
                            <div className="center-cropped profileimg">
                                <img id="myImg" src="/img/placeholder.jpg" alt={"none"}/>
                            </div>
                            <br />
                            <div className="center_button">
                                <label id="#bb" className="avtbutton profilebutton">Đổi ảnh đại diện
                                    <input type="file" id="File" className="hideinput" size={60} />
                                </label>
                            </div>
                        </div>

                        <hr />
                        <div className="col-md-6 profilecol1">
                            <div>
                                <Sub_user title="Họ" id="fname" info="Nguyễn"/>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <Sub_user title="Tên" id="name" info="Văn A"/>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <Sub_user title="Username" id="user" info="MemeMaster96"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 profilecol1">
                            <div>
                                <div>
                                    <Sub_user title="Email" id="mail" info="meman@gmail.com"/>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <Sub_user title="Ngày sinh" id="bdate" info="6/9/1996"/>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <Sub_user title="Số điện thoại" id="phone" info="012345678"/>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div>
                                <button id="save" className="btn btn-primary buttonstyle">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;