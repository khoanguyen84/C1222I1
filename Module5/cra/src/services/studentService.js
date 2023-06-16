import axios from "axios";

class StudentService{
    static getStudents(page = 1){
        return axios.get(`https://js-post-api.herokuapp.com/api/students?_page=${page}`)
    }

    static removeStudent(studentId){
        return axios.delete(`https://js-post-api.herokuapp.com/api/students/${studentId}`)
    }
}

export default StudentService;