import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from 'redux/actions'
import Alert from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        const { title } = this.state
        if (!title.trim()) {
            return this.props.showAlert('Name cannot be empty')
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost);
        this.props.createPost(newPost)
        this.setState({ title: '' })
    }
    changeInputHandler = (e) => {
        e.persist()
        this.setState(prev => ({ ...prev, ...{ [e.target.name]: e.target.value } }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Post title</label>
                    <input
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)