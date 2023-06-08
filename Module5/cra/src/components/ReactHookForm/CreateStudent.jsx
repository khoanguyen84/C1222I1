import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Name is mandatory').max(5, 'Name should contains maximuns 50 characters!')
}).required();

function CreateStudent() {

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    })
    const handleOnSubmit = (data) => {
        console.log(data);
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
                        <input type="number" className="form-control" name="age" />
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Mark</label>
                        <input type="number" className="form-control" name="mark" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="form-label" htmlFor="">City</label>
                        <input type="text" className="form-control" name="city" />
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