import React from 'react';
import {Menu, Dropdown, Button} from "antd";
import { Link } from 'react-router-dom';
import logojob from './image/logo.png';
import './head.scss';
import routes from '../../constants/routes';
import {Route, withRouter} from 'react-router';
// import Footer from "../Footer";

class Head extends React.Component{
    render() {

        return (
            <div className="head">
                <div className="logo">
                    <Link to={"/"}>
                        <img className="logo-img" src={logojob} alt={''} />
                    </Link>
                </div>
                <Menu className="menu-header" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to={routes.home}>
                            <b>Home</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={routes.job}>
                            <b>Job List</b>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
};

export default withRouter(Head);