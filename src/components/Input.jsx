import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { inputSchema } from '../schema/inputSchema';
import "../style/style.css"


const Input = () => {
    const [categories, setCategories] = useState([]);

    const url = "https://northwind.vercel.app/api/categories";

    const fetchCategories = async () => {
        await axios.get(url).then((res) => setCategories(res.data));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const {
        register, handleSubmit, handleChange, formState: { errors },
    } = useForm({
        resolver: yupResolver(inputSchema)
    });
    const formSubmit = (data) => {
        console.log(data);
    }
    const myFunction=(values)=>{
        const url = "https://northwind.vercel.app/api/products";
        const data = {
          categoryId: values.categories,
          name: values.name,
          unitPrice: values.unitPrice,
          unitsInStock: values.unitStock,
          discontinued: values.discontinued,
          quantityPerUnit: values.quantityPerUnit,
        };
        axios
          .post(url, data, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          })
          .then(({ data }) => {
            console.log(data);
          });
    }


    return (
        <>
            <div className='wrapper'>

                <form className='container' onSubmit={handleSubmit(formSubmit)}>

                    <div>
                        <h1 style={{ fontSize: 40 }}>Product Add Form</h1>
                        <br />
                        <p><a href="https://northwind.vercel.app/api/products">Add API link to check</a></p>
                    </div>
                    <div>
                        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                        <Select
                            style={{ width: 400 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories}
                            
                            onChange={handleChange}
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <TextField style={{ backgroundColor: "white", width: 400 }} {...register("name")} name="name" id="name" label="Name" variant="outlined" />
                    {errors.name ? (
                        <span style={{ color: "red" }}>{errors.name.message}</span>
                    ) : (
                        <></>
                    )}
                    <TextField style={{ backgroundColor: "white", width: 400 }} {...register("quantityPerUnit")} name="quantityPerUnit" id="quantityPerUnit" label="quantityPerUnit" variant="outlined" />
                    {errors.quantityPerUnit ? (
                        <span style={{ color: "red" }}>{errors.quantityPerUnit.message}</span>
                    ) : (
                        <></>
                    )}
                    <TextField style={{ backgroundColor: "white", width: 400 }} {...register("unitPrice")} name="unitPrice" id="unitPrice" label="unitPrice" variant="outlined" />
                    {errors.unitPrice ? (
                        <span style={{ color: "red" }}>{errors.unitPrice.message}</span>
                    ) : (
                        <></>
                    )}
                    <TextField style={{ backgroundColor: "white", width: 400 }} {...register("unitsInStock")} name="unitsInStock" id="unitsInStock" label="unitsInStock" variant="outlined" />
                    {errors.unitsInStock ? (
                        <span style={{ color: "red" }}>{errors.unitsInStock.message}</span>
                    ) : (
                        <></>
                    )}
                    <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="is discontinued" />
                    <Button onClick={myFunction} className='btn' color='success' type='submit' variant="contained">Add to Product</Button>
                </form>

            </div>
        </>
    )
}

export default Input
