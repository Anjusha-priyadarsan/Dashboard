import React from 'react';
import "./Dashboard.css";
import { Power } from 'react-feather';



function Dashboard() {
    return (
        <>

            <div className="profile">
                <img
                    style={{
                        borderRadius: "50%",
                        height: "80px",
                        width: " 140px",
                        marginTop: "35px",
                        marginLeft: "40px",
                    }}
                    src="https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/3b/77/b5/3b77b573-b558-7d7d-ef62-00f978a11c2f/pr_source.png/1200x630cw.png"
                    alt=""
                />
                <h3 className="profile-h3">
                    Ram Mohan{" "}
                    <i
                        style={{ color: "blue", fontSize: "20px" }}
                        className="fa-solid fa-angle-right"
                    ></i>
                </h3>
                <h5 className="profile-h5">rammohan2@gmail.com</h5>


                <div className="profile-content">
                    <div className="menu-item" style={{marginTop:"30px"}}>
                        <i style={{ color: "blue" }} className="fa-solid fa-table-columns"></i>{" "}
                        <span style={{ marginLeft: "10px" }}>Dashboard</span>
                    </div>
                    <div className="menu-item">
                        <i
                            style={{ color: "blue" }}
                            className="fa-solid fa-person-dress-burst"
                        ></i>
                        <span style={{ marginLeft: "10px" }}>Perks</span>
                    </div>
                    <div className="menu-item">
                        <i style={{ color: "blue" }} className="fa-solid fa-puzzle-piece"></i>{" "}
                        <span style={{ marginLeft: "10px" }}> Addons</span>
                    </div>
                    <div className="menu-item">
                        {" "}
                        <i
                            style={{ color: "blue" }}
                            className="fa-solid fa-clipboard-question"
                        ></i>
                        <span style={{ marginLeft: "15px" }}>FAQ</span>
                    </div>
                    <div className="menu-item">
                        <i style={{ color: "blue" }} className="fa-solid fa-life-ring"></i>
                        <span style={{ marginLeft: "10px" }}>Support</span>
                    </div>

                    {/* logpout button */}

                    <div className="footer">
                    <div className="logout">
                        Logout{" "}
                        <i >
                            <Power style={{height:"13px",width:"13px"}}/>
                        </i>
                    </div>
                </div>


                    

                </div>

                
            </div>


        </>
    )
}

export default Dashboard