import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import Movie_01 from "../movie/sub_movie/movie_video/movie_01";

class Sub_home extends Component {
    render() {
        return (
            <div>
                <div id="features" className="text-center animated flipInX delay-1s slower">
                    <h2>PHIM</h2>
                    <div className="headdingGray"><sup className="spainGray pd-right-20">________________</sup><i className="fa fa-heart-o" /><sup className="spainGray pd-left-20">________________</sup></div>

                    <div id="fea-slide" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner fea-full-content" role="listbox">
                            <div className="item active">
                                <div className="container fea-container">
                                    <div className="row">
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/the_nun.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>THE NUN</p>
                                                <p>ÁC QUỶ MA SƠ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/chuoidunglaymecon.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>CHÚ ƠI ĐỪNG </p>
                                                <p>LẤY MẸ CON</p>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/shin.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>SHIN</p>
                                                <p>CẬU BÉ BÚT CHÌ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/joneyEnglish.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>JohnyEnglish</p>
                                                <p>Điệp viên tái xuất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="container fea-container">
                                    <div className="row">
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/nguoitukhosai.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>THE NUN</p>
                                                <p>ÁC QUỶ MA SƠ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/donghomathuat.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>CHÚ ƠI ĐỪNG LẤY MẸ CON</p>

                                            </div>
                                        </div>

                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/kehoachdoichong.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>SHIN</p>
                                                <p>CẬU BÉ BÚT CHÌ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/acquybongdem.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>JohnyEnglish</p>
                                                <p>Điệp viên tái xuất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="container fea-container">
                                    <div className="row">
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/thienthancongly.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>THE NUN</p>
                                                <p>ÁC QUỶ MA SƠ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img">
                                            <img src="./img/img_home/index_nowshowing/acquyvohinh.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>CHÚ ƠI ĐỪNG LẤY MẸ CON</p>

                                            </div>
                                        </div>

                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/smallfoot.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>SHIN</p>
                                                <p>CẬU BÉ BÚT CHÌ</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 fea-img ">
                                            <img src="./img/img_home/index_nowshowing/chuchorobotax.jpg" width="100%"/>
                                            <div className="fea-fade">
                                                <button type="button" className="fea-fade-play" data-toggle="modal"
                                                        data-target="#myModal"><i className="fa fa-play-circle-o"/>
                                                </button>
                                                <div className="fea-fade-text">
                                                    <hr className="hr-color-orange"/>
                                                    <p className="text-center">
                                                        <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                        <span>18+</span>
                                                        <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="fea-img-text-bottom">
                                                <p>JohnyEnglish</p>
                                                <p>Điệp viên tái xuất</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Left and right controls*/}

                        <a className="left carousel-control fea-fix-carousel" href="#fea-slide" role="button"
                           data-slide="prev">
                            <span className="fa fa-hand-o-left fea-fix-potision-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control fea-fix-carousel" href="#fea-slide" role="button"
                           data-slide="next">
                            <span className="fa fa-hand-o-right fea-fix-potision-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>

                        <ol className="carousel-indicators fea-dot">
                            <li data-target="#fea-slide" data-slide-to="0" className="active"/>
                            <li data-target="#fea-slide" data-slide-to="1"/>
                            <li data-target="#fea-slide" data-slide-to="2"/>
                        </ol>
                    </div>
                </div>

                {/*movie*/}
                <div className="modal fade" id="myModal" role="dialog">
                    <Movie_01/>
                </div>

            </div>

    );
    }
}

export default Sub_home;