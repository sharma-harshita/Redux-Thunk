import React from 'react'
import {connect} from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions"

class CoursePage extends React.Component{

   componentDidMount(){
       this.props.loadCourses()
   }

    // handleChange=event=>{
    //     const course = {...this.state.course, title:event.target.value}
    //     this.setState({course});
    // }

    // handleSubmit=(event)=>{
    //     event.preventDefault()
    //     debugger;
    //     this.props.createCourse(this.state.course)
    // }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Courses</h1>
                {/* <h2>Add Course</h2>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save"/>
                {this.props.courses.map(course=>(
                    <div key={course.title}>{course.title}</div>
                ))} */}
            {this.props.courses.map(value=>{
                return <div key="value.employee_age">{value.employee_name}</div>
            })}
            </form>
        )
    }
}


const mapStateToProps=(state)=>({
    courses:state.courses
})

const mapDispatchToProps=(dispatch)=>({
    createCourse:(course)=>{
        dispatch(courseActions.createCourse(course))
    },
    loadCourses :() =>{
        dispatch(courseActions.loadCourses())
    }
})

export default connect (mapStateToProps, mapDispatchToProps) (CoursePage);