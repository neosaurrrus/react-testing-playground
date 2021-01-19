import React, { Component } from 'react'

export default class MovieForm extends Component {

    state = {
        title: ''
    }

    render() {
        const {submitForm} = this.props
        const {title} = this.state
        return (
            <div>
               <form data-testid='movie-form' onSubmit={ ()=> submitForm({title})}>
                   <h1>gow</h1>
                   <label htmlFor="title">Title</label> 
                   <input id="title" type="text" onChange={(e) => this.setState({title: e.target.value})}></input>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}
