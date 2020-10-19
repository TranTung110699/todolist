import React, {Component} from 'react';
import * as axios from "axios";
import {Button, Input} from "antd";
import '../creat/creat.scss';

class EditJob extends Component {
    state = {
        code: '',
        name: '',
        data: [],
    }

    constructor(props) {
        super(props);
        this.state={
            code: '',
            name: '',
            data: [],
            isChecked: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    handleChangeCode(e) {
        this.setState({ code: e.target.value });
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
    }

    onSubmit(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        console.log(id)

        let data = {
            code: this.state.code,
            name: this.state.name,
            id
        };
        axios.put(`http://localhost:3005/jobs/${id}`,data)
            .then(res => {
                this.componentDidMount();
            })
            .catch(e => {
                console.log(e);
            });
        return  window.history.back();
    }
    render() {
        //const {code, name} = this.props.location.state.item;
        return (
            <div>
                <div align="center" className="title-creat">Edit Job</div>
                <div align="center">
                    <form className="form-todo-list" onSubmit={this.onSubmit}>
                        <div>
                            <Input
                                placeholder ="Enter code..."
                                type="text"
                                className="form-search"
                                onChange={this.handleChangeCode}
                                defaultValue={this.state.code}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder ="Enter name..."
                                type="text"
                                className="form-search"
                                onChange={this.handleChangeName}
                                defaultValue={this.state.name}
                            />
                        </div>
                        <div>
                            <Button htmlType="submit">
                                Save change
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditJob;