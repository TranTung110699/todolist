import React, {Component} from 'react';
import  {Button, Input, Checkbox} from "antd";
import './creat.scss';
import * as axios from "axios";
import {Link} from "react-router-dom";

class CreatJob extends Component {
    state = {
        code: '',
        name: '',
        data: [],
        continueAdd: false,
    }

    constructor(props) {
        super(props);
        this.state={
            code: '',
            name: '',
            data: [],
            continueAdd: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeCode(e) {
        this.setState({ code: e.target.value });
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const code = this.state.code;
        const name = this.state.name;
        if(code !== "" && name !== ""){
            axios.post(`http://localhost:3005/jobs`,{code,name})
                .then(res => {
                    const jobs = res.data;
                    this.setState({jobs})
                })
        }
    }

    render() {
        return (
            <div>
                <div align="center" className="title-creat">Creat New Job</div>
                <div align="center">
                    <form className="form-todo-list" onSubmit={this.onSubmit}>
                        <div>
                            <Input
                                placeholder ="Enter code..."
                                type="text"
                                className="form-search"
                                onChange={this.handleChangeCode}
                                value={this.state.code}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder ="Enter name..."
                                type="text"
                                className="form-search"
                                onChange={this.handleChangeName}
                                value={this.state.name}
                            />
                        </div>
                        <div>
                            <Button htmlType="submit">
                                Creat New Job
                            </Button>
                        </div>
                    </form>
                    <div align="center">
                        <Link to="/job-list">
                            <Button htmlType="submit">
                                Back to Job List
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatJob;