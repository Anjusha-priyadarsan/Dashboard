import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";


import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <>

            <Container expand="lg" style={{ height: "100px" }}>


                <div className='header-section '>
                    <Grid container >


                        <Grid xs={2} sm={2} md={2} lg={2}>
                            <div className='left-portion'>
                                {/* logo */}

                                <img width={"140px"} src="/Assets/logo.PNG" alt="Logo" className="brand-logo" />

                            </div>
                        </Grid>
                        <Grid xs={0} sm={6} md={6} lg={6} >

                        </Grid>
                        <Grid xs={12} sm={4} md={4} lg={4} >
                            <div >

                                <div className="right-portion">
                                    <div className="right-1" style={{marginRight:"-90px"}}>

                                        <img
                                            style={{ height: "1.6rem", width: "30px", borderRadius: "50%" }}
                                            src="https://www.shutterstock.com/image-illustration/logo-alphabet-k-brand-identity-260nw-2184518287.jpg"
                                            alt=""
                                        />

                                        <span>XYZ Enterprises Pvt. Ltd</span>
                                    </div>

                                    <div className="icon">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>



            </Container >



        </>
    )
}

export default Header