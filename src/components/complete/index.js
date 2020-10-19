import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Checkbox, Table} from "antd";
import '../job-list/job-list.scss';
import * as axios from "axios";

class CompleteJob extends Component {
    columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (data, item) => (
                <div style={{display:'flex'}}>
                    <div className="job-name"><b>{item.name}</b></div>
                </div>
            ),
        },
        {
            key: 'id',
            render: (data, item) => (
                // <Link to={`${routes.bestSeller}${item.cid}`}>Chi tiết</Link>
                <Link to={{
                    pathname: `/job-list/${item.id}`,
                    state: { item }}}>
                    <Checkbox key={item.id} checked={this.state.isChecked} onClick={this.checkboxChange}></Checkbox>
                </Link>
            ),
        },
        {
            key: 'id',
            render: (data, item) => (
                <Link  onClick={() => this.deleteJob && this.deleteJob(item.id) }>
                    Delete
                </Link>
            ),
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            jobs:[],
            id:'',
            isChecked: true,
        }
        this.deleteJob = this.deleteJob.bind(this)
        this.checkboxChange = this.checkboxChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios.get(`http://localhost:3005/completes`)
            .then(res => {
                const jobs = res.data;
                this.setState({jobs})
            })
            .catch(error => console.log(error));
    }

    deleteJob(id){
        axios.delete(`http://localhost:3005/completes/${id}`)
            .then(res => {
                this.componentDidMount();
            })
            .catch(e => {
                console.log(e);
            });
    }

    checkboxChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {

        const { jobs } = this.state;

        return (
            <div className="total-page">
                <div align="center" className="title">Completed Job Managerment</div>
                <div align="center">
                    <Link to="/job-list/create">
                        <Button className='create-job'>New Jobs</Button><br/>
                    </Link>
                </div>
                <div align="center" className="job-table">
                    <Table
                        columns={this.columns}
                        dataSource={jobs}
                        borderedm
                        rowKey="id"
                        pagination={false}
                    />
                </div>
                <div align="center">
                    <Link to="/job-list">
                        <Button htmlType="submit">
                            Back to Job List
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CompleteJob;