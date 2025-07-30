import React from 'react';
import Grid from './assets/Grid';
import chart from './assets/chart';

const Dashboard = () => {

    return(
        <div className="flex items-center justify-center w-full h-screen bg-gray-100">
            <Grid/>
            <chart/>
        </div>
    )
}

export default Dashboard;