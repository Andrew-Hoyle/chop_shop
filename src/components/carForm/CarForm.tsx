import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import {chooseName} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

// import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
    model: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let {carData, getData} = useGetData();
    const store = useStore()
    const name = useSelector<CarState>(state => state.make)
    const {register,handleSubmit} = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if(props:id!){
            // server_calls.update(props.id!, data)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))

        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="model">Camera Quality</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="msrp">Flight Time</label>
                    <Input {...register('msrp')} name="msrp" placeholder="Msrp"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}