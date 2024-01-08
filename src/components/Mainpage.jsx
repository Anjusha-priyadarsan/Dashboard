import React from 'react';
import "./Mainpage.css";
import Card from 'react-bootstrap/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Cloud , Play} from 'react-feather';
import { Col } from 'react-bootstrap';




const plans = [
    {
        title: "Basic",
        cash: "89.99/mo",
        Ncash: "9.99",
        user: "Upto 25 Users",
        storage: "Upto 25gb Storage",
        email: "Email Support",
    },
    {
        title: "Standard",
        cash: "189.99/mo",
        Ncash: "99.99",
        user: "Upto 50 Users",
        storage: "Upto 60gb Storage",
        email: "Email+Chat Support",
    },
    {
        title: "Premium",
        cash: "389.99/mo",
        Ncash: "119.99",
        user: "Upto 75 Users",
        storage: "Upto 100gb Storage",
        email: "Email+Chat+Whatsapp Support",
    },
];

function Mainpage() {
    return (
        <>

            <Grid container>

                <Grid >
                    <Grid lg={12} md={12} sm={12} xs={12}>
                        <div className="text" >
                            <h1 > Choose a Plan that's just right for you!!</h1>
                        </div>
                    </Grid>
                </Grid>

                <Grid >
                    <Col lg={4} md={4} sm={4} xs={4}></Col>
                    <Col lg={4} md={4} sm={4} xs={4}></Col>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <div className="plan-btn">
                            <button className="btn-one">Monthly</button>
                            <button className="btn-two">
                                Annually
                                <sup style={{ color: "green", fontSize: "10px" }}>-10%</sup>
                            </button>
                        </div>
                    </Col>
                </Grid>

            </Grid>

            {/* cards */}
            <div className='mentors'>
                {/* <h1>Our Expert Mentors</h1> */}
                <Grid container style={{ marginTop: "0px" }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {plans.map((plan, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card sx={{ maxWidth: 200, flexGrow: 1 }} style={{ height: "350px", padding: "15px", borderRadius: "10PX", marginLeft: "10px" ,marginLeft: index === 0 ? '0px' : index === 1 ? '15px' : '32px'}}>

                                <CardContent style={{ paddingLeft: "2px" }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {plan.title}<br />
                                    </Typography>


                                    <p
                                        style={{
                                            textDecoration: "line-through",
                                            color: "red",
                                            marginTop: "0px",
                                        }}
                                    >
                                        <span style={{ color: "black", marginLeft: "5px" }}>
                                            ${plan.cash}
                                        </span>
                                    </p>

                                    <p style={{ marginTop: "5px", marginLeft: "5px",fontWeight:"600",fontSize:"20px" }}>
                                        ${plan.Ncash}<span style={{fontWeight:"normal",fontSize:"16px"}}>/mo</span>
                                    </p>

                                    <button
                                        className="get-start-btn"
                                        style={{
                                            backgroundColor: index === 0 ? '#F7D695' : index === 1 ? '#F68090' : "#ED73F3",
                                        }}
                                    >
                                        <span style={{fontSize:"12px",fontWeight:"bold"}}>Get start</span>{" "}
                                        <i
                                            style={{ marginLeft: "10px" }}
                                            class="fa-solid fa-arrow-right"
                                        ></i>
                                    </button>

                                    <hr style={{ margin: "5px", marginTop: "3px", color:"black" }} />

                                    <p style={{ marginTop: "13px", fontSize: "10px" }}>
                                        what you`ll get:
                                    </p>

                                    <p style={{ marginTop: "13px", marginLeft: "5px",fontSize: "13px" }}> <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                                            <i class="fa-regular fa-user fa-2xs"></i> &nbsp;
                                        </span>{plan.user}</p>

                                    <p style={{ marginTop: "7px", marginLeft: "5px",fontSize: "13px" }}> <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                                            <Cloud style={{height:"14px",width:"16px"}} />&nbsp;
                                        </span>
                                        {plan.storage}
                                    </p>
                                    

                                    <p style={{ marginTop: "7px", marginLeft: "5px" ,fontSize: "13px"}}><i class="fa-regular fa-envelope fa-xs"></i>&nbsp;&nbsp;{plan.email}</p>

                                    <p
                                        style={{
                                            marginTop: "18px",
                                            textAlign: "center",
                                            textDecoration: "underline",
                                            
                                        }}
                                    >
                                        <h5>EXPLORE FEATURES <Play style={{color: index === 0 ? '#F7D695' : index === 1 ? '#F68090' : "#ED73F3",fill: index === 0 ? '#F7D695' : index === 1 ? '#F68090' : "#ED73F3",height:"12px",width:"12px"}}/></h5>
                                    </p>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}



                </Grid>
            </div>



            {/* bottom row */}
            <Grid container style={{padding:"20px"}}>
                <div className="row">
                    <Grid lg={6} md={12} xs={12} sm={12} >
                        <Card style={{ width: '410px' }}>
                            <div className="bottom-card">
                                <div className="left">
                                    <div style={{ backgroundColor: '#74ff4e' }} className='free-forever'>
                                        <p>Free Forever</p>
                                    </div>
                                    <h3>Free Starter</h3>
                                    <p style={{ fontSize:"13px" }}>The quickest and easiest way to try protocols with basic functionalities</p>
                                    <button style={{ backgroundColor: '#74ff4e' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                                <div className="right">
                                <h5 style={{fontWeight:"500"}}>What you'll get :</h5>
                                    <div className='features'>
                                    <i class="fa-regular fa-user fa-xs"></i> &nbsp;&nbsp;
                                        <span>Up to 25 User</span>
                                    </div>
                                    <div className='features'>
                                        <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                                        <Cloud style={{height:"14px",width:"16px"}} />&nbsp;
                                        </span>
                                        <span>Up to 25gb storage User</span>
                                    </div>
                                    <div className='features'>
                                        <i class="fa-regular fa-envelope  fa-xs"></i>&nbsp;&nbsp;
                                        <span>Email Support</span>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <i class="fa-solid fa-check-double fa-xs"></i>
                                        <span style={{ marginLeft: '10px',fontSize:"13px" }}>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor,Director and Tem Management included.</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid lg={6}  md={12} xs={12} sm={12}>
                        <Card style={{ width: '450px' }}>
                            <div className="bottom-card">
                                <div className="left">
                                    <div style={{ backgroundColor: '#99d1ff' }} className='free-forever'>
                                        <p>Let's Connect</p>
                                    </div>
                                    <h3>Enterprise Plan</h3> 
                                    <p style={{ fontSize:"13px" }}>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
                                    <button style={{ backgroundColor: '#99d1ff' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                                <div className="right">
                                    <h5 style={{fontWeight:"500"}}>What you'll get :</h5>
                                    <div className='features'>
                                    <i class="fa-regular fa-user fa-xs"></i> &nbsp;&nbsp;
                                        <span>Up to 25 User</span>
                                    </div>
                                    
                                    <div style={{ display: 'flex' }}>
                                        <i class="fa-solid fa-check-double fa-xs"></i>
                                        <span style={{ marginLeft: '10px' ,fontSize:"13px"}}>Customization of all other features.</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </div>
            </Grid>


        </>
    )
}

export default Mainpage