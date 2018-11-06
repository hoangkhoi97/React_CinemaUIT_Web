import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
// import Header from './component/header/header';
import Footer from './component/footer/footer';
import User from './component/main/user';
import Home from './component/main/home';
import Sign_in from './component/main/sign_in';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
             <div>
                  <header>
                      <div className="container-fluid bg-gray">
                          <a className="na-brand" href="#"><Link to="/"><img src="/img/index_icon_range.png" width="10%" alt={"none"}/></Link></a>
                          <div className="navbar-right mg-top-20">
                              <a className="na-sign-in" href="#"><Link to="/sign_in"><i className="fa fa-user" /> ĐĂNG NHẬP</Link></a>
                              <a className="na-sign-in hidden" href="#"><i className="fa fa-sign-out" /> ĐĂNG XUẤT</a>
                              <div className="langauge">
                                  <p><a href="#">EN </a>|<a className="langauge-active" href="#"> VN</a></p>
                              </div>
                          </div>
                          <div className="na-bot mg-top-10">
                              <form className="navbar-form navbar-left" action>
                                  <div className="input-group">
                                      <input type="text" className="form-control" placeholder="Tìm kiếm tên phim, ưu đãi,..." />
                                      <div className="input-group-btn">
                                          <button className="btn btn-default" type="submit">
                                              <i className="fa fa-search" />
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <nav className="navbar navbar-default na">
                          <div className="container">
                              <div className="row">
                                  <div className="navbar-header">
                                      <button type="button" className="navbar-toggle na-toggle" data-toggle="collapse" data-target="#myNavbar">
                                          <span className="icon-bar" />
                                          <span className="icon-bar" />
                                          <span className="icon-bar" />
                                      </button>
                                  </div>
                                  <div className="collapse navbar-collapse na-right" id="myNavbar">
                                      <ul className="nav navbar-nav ">
                                          <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">PHIM<span className="caret" /></a>
                                              <ul className="dropdown-menu">
                                                  <li><a href="#">PHIM ĐANG CHIẾU</a></li>
                                                  <li><a href="#">PHIM SẮP CHIẾU</a></li>
                                              </ul>
                                          </li>
                                          <li><a className="na-item " href="#">ƯU ĐÃI</a></li>
                                          <li><a className="na-item" href="#">BLOG ĐIỆN ẢNH</a></li>
                                          <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">RẠP<span className="caret" /></a>
                                              <ul className="dropdown-menu">
                                                  <li><a href="#">CÁC CỤM RẠP</a></li>
                                                  <li><a href="#">RẠP ĐẶC BIỆT</a></li>
                                              </ul>
                                          </li>
                                          <li><a className="na-item" href="#">LIÊN HỆ</a></li>
                                          <li><a className="na-item"><Link to="/user">THÀNH VIÊN</Link></a></li>
                                          <li><a className="na-item" href="#">THANH TOÁN</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </nav>
                  </header>
              </div>

              {/*<User />*/}

              <Route exact path="/" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/sign_in" component={Sign_in} />

              <Footer/>

     </div>
  </Router>
    );
  }
}

export default App;
