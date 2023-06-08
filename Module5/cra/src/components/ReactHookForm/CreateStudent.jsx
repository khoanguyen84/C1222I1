import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import randomstring from "randomstring";


const schema = yup.object().shape({
    name: yup.string().required('Name is mandatory').max(50, 'Name should contains maximuns 50 characters!'),
    age: yup.number().positive().required().integer().min(18).max(50).typeError('Age is a required field'),
    mark: yup.number().positive().required().max(10).typeError('Mark is a required field'),
    city: yup.string().required(),
    gender: yup.string()
});

function CreateStudent() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const handleOnSubmit = async (data) => {
        data = {
            ...data,
            id: randomstring.generate(10),
            createdAt: (new Date).valueOf(),
            updatedAt: (new Date).valueOf()
        }
        fetch('https://js-post-api.herokuapp.com/api/students', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let result = await res.json();
            console.log(result);
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Student Name</label>
                        <input type="text" className="form-control" {...register("name")} />
                        <span className="text-danger">{errors.name?.message}</span>
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Age</label>
                        <input type="number" className="form-control" {...register('age')} />
                        <span className="text-danger">{errors.age?.message}</span>
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Mark</label>
                        <input type="string" className="form-control" {...register('mark')} />
                        <span className="text-danger">{errors.mark?.message}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value={"male"} defaultChecked={true} type="radio" {...register('gender')} />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value={'female'} type="radio" {...register('gender')} />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">City</label>
                        <input type="text" className="form-control" {...register('city')} />
                        <span className="text-danger">{errors.city?.message}</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-sm-12">
                        <button className="btn btn-warning btn-sm">
                            <i className="fa fa-plus me-2"></i>
                            Create Student
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateStudent;