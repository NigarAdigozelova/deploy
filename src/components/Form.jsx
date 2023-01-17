import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <>
      <div className='boxWrapper'>
        <div>
            <h1></h1>
            <p><a href="https://northwind.vercel.app/api/products " target="_blank">API link to check</a></p>
        </div>
        <div>
        <TextField id="outlined-basic" label="Categories" variant="outlined" />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Unit Price" variant="outlined" />
        <TextField id="outlined-basic" label="Unit in Stock" variant="outlined" />
        <TextField id="outlined-basic" label="Quantity per Unit" variant="outlined" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Is Discounted" />
        <Button variant="contained">ADD PRODUCT TO API</Button>

        </div>


      </div>
    </>
  )
}

export default Form
