import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
// reduxForm é o connect para o app state form no reduxStore
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import {createPost} from "../actions";

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for post'
    },
    categories: {
        type: 'input',
        label: 'ENter some categories'
    },
    content: {
        type: 'textarea',
        label: 'Put the content'
    }
};

//['title', 'categories', 'content'];

class PostNew extends Component{

    renderField(field) {
        const {meta: {touched, error}}  = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    //passa todos os metodos para o component
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : '' }
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })

    }

    render(){
        const {handleSubmit} = this.props;

        //handle submit is responsible to handle validations and another functions from redux form
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title" //name é o piece of state
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories" //name é o piece of state
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content" //name é o piece of state
                    component={this.renderField}
                />
                <button type="submit"  className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    // define an empty error object
    const errors = {};
    // validate the form
    // the 'title' is pulled in from the name of the input field

    _.each(FIELDS, (type, field) => {
       if(!values[field]) {
           errors[field] = `Enter a ${field}`
       }
    });


    return errors;

};


export default reduxForm({
    validate,
    form: 'PostsNewForm', //form é o name do form
})(connect(null, {createPost})(PostNew))