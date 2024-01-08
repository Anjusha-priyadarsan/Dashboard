import React from 'react'
import Dashboard from '../components/Dashboard'
import Mainpage from '../components/Mainpage'
import Rightpage from '../components/Rightpage'
import { Grid } from '@mui/material'




function Home() {
    return (
        <>

            
                <Grid container columnSpacing={{ xs: 4, sm: 4, md: 4,lg:1}}>
                    <Grid lg={2}  md={2} sm={2} xs={2}>
                        <div class="sub-portion1">
                            {/* this dashboard page  */}
                            <Dashboard />
                        </div>
                    </Grid>
                   <Grid lg={9} md={9} sm={9} xs={9} >
                        <div class="sub-portion2">
                            {/* this Main page */}
                            <Mainpage />
                        </div>
                   </Grid>
                    <Grid lg={1} md={1} sm={1} xs={1} >
                        <div style={{backgroundColor:"#C8D6F4",height:"95%",width:"53px",marginLeft:"50px",marginTop:"-19px"}}>
                            {/* Right page */}
                            <Rightpage />
                           
                        </div>
                    </Grid>
                </Grid>
            


        </>
    )
}

export default Home