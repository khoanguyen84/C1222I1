import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import randomstring from "randomstring";
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required().max(50),
    age: yup.number().required().integer().min(18).max(60).typeError('age is required field'),
    mark: yup.number().required().positive().max(10).typeError('mark is required field'),
    city: yup.string().required(),
})

function CreateStudent() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSubmitClick = async (data) => {
        data = {
            ...data,
            id: randomstring.generate(10)
        }
        // fetch('https://js-post-api.herokuapp.com/api/students', {
        //     method: "POST",
        //     headers:{
        //         "Content-Type": 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(async (response) => {
        //         let result = await response.json();
        //         console.log(result);
        //         reset()
        //     })
        await axios.post('https://js-post-api.herokuapp.com/api/students', data)
                .then((res) => {
                    toast.success('Student created success!', {
                        position:'bottom-right',
                        autoClose: 2000
                    })
                    reset();
                }) 
                .catch((error) => {
                    console.log(error.message);
                })
    }
    return (
        <div className="container">
            <h5 className="text-primary">
                <i className="fa fa-person"></i>
                Create Student
            </h5>
            <form onSubmit={handleSubmit(handleSubmitClick)} className="w-50">
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-sm"
                        {...register('name')}
                    />
                    <span className="text-danger">{errors.name?.message}</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Age</label>
                    <input type="number" className="form-control form-control-sm"
                        {...register('age')}
                    />
                    <span className="text-danger">{errors.age?.message}</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Mark</label>
                    <input type="text" className="form-control form-control-sm"
                        {...register('mark')}
                    />
                    <span className="text-danger">{errors.mark?.message}</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Gender</label>
                    <div>
                        <div className="form-check-inline">
                            <input type="radio" className="form-check-input"
                                defaultChecked={true}
                                value={'male'}
                                {...register('gender')} />
                            <label className="form-check-label ms-2">
                                Male
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <input type="radio" className="form-check-input"
                                value={'female'}
                                {...register('gender')} />
                            <label className="form-check-label ms-2">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">City</label>
                    <input type="text" className="form-control form-control-sm"
                        {...register('city')}
                    />
                    <span className="text-danger">{errors.city?.message}</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label"></label>
                    <button type="submit" className="btn btn-danger btn-sm me-3">
                        <i className="fa fa-user-plus me-2"></i>Create
                    </button>
                    <Link to={'/student/list'} className="btn btn-dark btn-sm">
                        <i className="fa fa-arrow-left"></i>Back
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateStudent;