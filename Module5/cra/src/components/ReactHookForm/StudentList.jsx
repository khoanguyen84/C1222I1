import React, { useState, useEffect } from "react";
import StudentService from "../../services/studentService";
import Spinner from "../LearningUseEffect/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function StudentList() {
    const [state, setState] = useState({
        data: [],
        pagination: {}
    })
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    useEffect(() => {
        try {
            setLoading(true)
            async function fetchData() {
                let res = await StudentService.getStudents(page)
                setState(res.data);
                let pageSize = Math.ceil(Number(res.data.pagination._totalRows) / Number(res.data.pagination._limit));
                setPageSize(pageSize)
                setLoading(false)
            }
            fetchData()
        } catch (error) {

        }
    }, [page])
    const handleClickNext = () => {
        if (page < pageSize) {
            setPage(page + 1)
        }
    }
    const handleClickLast = () => {
        if (page < pageSize) {
            setPage(pageSize)
        }
    }
    const handleClickPevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleClickFirst = () => {
        if (page > 1) {
            setPage(1)
        }
    }

    const handleRemoveStudent = async (student) => {
        let confirmed = window.confirm(`Are sure to remove ${student.name}?`);
        if (confirmed) {
            let deleteRes = await StudentService.removeStudent(student.id);
            if (deleteRes.data) {
                setPage(1)
                toast.info(`${student.name} removed success`);
            }
        }
    }
    const { data, pagination } = state
    return (
        <div className="container">
            <div className="d-flex algin-items-center justify-content-between">
                <h5 className="text-primary">
                    <i className="fa fa-person"></i>
                    Student List
                </h5>
                <Link className="btn btn-danger btn-sm" to={'/student/create'}>
                    <i className="fa fa-user-plus me-2"></i>
                    Create Student
                </Link>
            </div>
            {
                loading ? <Spinner /> : (
                    <div className="row">
                        {
                            data.map((student) => (
                                <div key={student.id} className="col-sm-3 mb-3">
                                    <div className="card text-white bg-primary">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="card-title">{student.name}</h5>
                                                <i role="button" className="fa fa-trash btn-danger"
                                                    onClick={() => handleRemoveStudent(student)}
                                                ></i>
                                            </div>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <span className="fw-bolder">Age: </span>{student.age}
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-bolder">Gender: </span>{student.gender}
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-bolder">Mark: </span>{student.mark}
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-bolder">City: </span>{student.city}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <div>
                <ul className="pagination">
                    <li className={page <= 1 ? 'page-item disabled' : 'page-item'}>
                        <button className="page-link" onClick={handleClickFirst}>
                            First
                        </button>
                    </li>
                    <li className={page <= 1 ? 'page-item disabled' : 'page-item'}>
                        <button className="page-link" onClick={handleClickPevious}>
                            Previous
                        </button>
                    </li>
                    <li className={page >= pageSize ? 'page-item disabled' : 'page-item'}>
                        <button className="page-link" onClick={handleClickNext}>
                            Next
                        </button>
                    </li>
                    <li className={page >= pageSize ? 'page-item disabled' : 'page-item'}>
                        <button className="page-link" onClick={handleClickLast}>
                            Last
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default StudentList;