import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
// reduxForm é o connect para o app state form no reduxStore

class PostNew extends Component{

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    //passa todos os metodos para o component
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render(){
        return (
            <form action="">
                <Field
                    label="Title"
                    name="title" //name é o piece of state
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags" //name é o piece of state
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content" //name é o piece of state
                    component={this.renderField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm', //form é o name do form
})(PostNew)