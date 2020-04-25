import * as types from "./actionTypes"
import axios from 'axios'

export function createCourse(course){
    debugger;
    return{type:types.CREATE_COURSE, course:course}
}

export function loadCourseSuccess(course){
    return{type:types.LOAD_COURSE_SUCCESS, courses:course}
}

export function loadCourses(){
    return function(dispatch){
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then(courses=>{
            dispatch(loadCourseSuccess(courses.data.data))
        }).catch(error=>{
            throw error;
        })
    }
}
