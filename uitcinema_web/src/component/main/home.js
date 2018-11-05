import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
          <div>
              <main>
                  <div id="home" className="carousel slide animated fadeInUp" data-ride="carousel">
                      <ol className="carousel-indicators home-dot">
                          <li data-target="#home" data-slide-to="0" className="active"></li>
                          <li data-target="#home" data-slide-to="1"></li>
                          <li data-target="#home" data-slide-to="2"></li>
                      </ol>

                      <div className="carousel-inner text-center home-inner" role="listbox">
                          <div className="item active">
                              <img src="./img/index_slide/1.jpg" alt="Brandi Img 1" width="100%"/>
                          </div>
                          <div className="item">
                              <img src="./img/index_slide/2.jpg" alt="Brandi Img 2" width="100%"/>

                          </div>
                          <div className="item">
                              <img src="./img/index_slide/3.jpg" alt="Brandi Img 3" width="100%"/>
                          </div>
                      </div>

                      <div className="home-box">
                          <h3>MUA VÉ NHANH</h3>
                          <hr/>
                              <div className="container-fluid">
                                  <div className="form-group  ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn ngày</option>
                                          <option value="0">Thứ năm, 18/10/2018</option>
                                          <option value="1">Thứ sáu, 19/10/2018</option>
                                      </select>
                                  </div>
                                  <div className="form-group  ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn rạp</option>
                                          <option value="0">UIT Cinema Bình Dương</option>
                                          <option value="1">UIT Cinema THỦ ĐỨC</option>
                                      </select>
                                  </div>
                                  <div className="form-group ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn phim</option>
                                          <option value="0">THE NUN</option>
                                          <option value="1">SHIN</option>
                                      </select>
                                  </div>
                                  <div className="form-group ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn xuất</option>
                                          <option value="0">19:30, 2D - Phụ đề</option>
                                          <option value="1">21:45, 2D - Phụ đề</option>
                                      </select>
                                  </div>
                                  <a className="btn home-button-dropdown" role="button" href="slot.html">MUA VÉ</a>
                              </div>
                      </div>
                  </div>

              </main>
          </div>
        );
    }
}

export default Home;