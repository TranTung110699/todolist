import React, {Component} from 'react';
import homeImg from './image/download.jpeg';
import './home.scss';
import {Link} from "react-router-dom";
import {Checkbox,Button,Modal} from "antd";

class Home extends Component {
    render() {
        return (
            <div align="center" className="home">
                <div>
                    <Link to="/job-list">
                        <Button className='create-job'>List công việc</Button><br/>
                    </Link>
                </div>
                <div align="left" className="home-text">A powerful and easy to use project management, job organizer and time-tracking app for contractors and specialty trades. Now it's super easy to manage jobs, organize tasks, schedule employees, and track costs right from your smart phone or tablet. Job Manager increases productivity, improves time sheet accuracy, and saves you thousands of dollars per year.</div>
                <div align="center" className="home-img">
                    <img style={{width:'100%',height:'100%'}} src={homeImg}/>
                </div>
            </div>
        );
    }
}

export default Home;