import { Box, Button, Grid2, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreData, setData, setError, setLoading } from "../../../store/slice";

export interface ICustomerDetails {
    name: string;
    phoneNo: string;
    address: string;
    state: string;
    pincode: string;
}

const AddCustomer = () => {
    const isLoading = useSelector((s: IStoreData) => s.isLoading)
    const dispatch = useDispatch();
    const [customerData, setCustomerData] = useState({
        name: '',
        phoneNo: '',
        address: {
            line1: '',
            state: '',
            zipcode: ''
        },

    })

    async function handleSubmit() {
        try {
            dispatch(setLoading(true))
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();
            dispatch(setData(data))
        } catch (error) {
            dispatch(setError(error))
        } finally {
            dispatch(setLoading(false))
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        if (['line1', 'state', 'zipcode'].includes(name)) {
            setCustomerData((data) => ({ ...data, address: { ...data.address, [name]: value } }))
        } else {
            setCustomerData((data) => ({ ...data, [name]: value }))
        }
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    
    return (
        <>

            <Grid2 container>
                <Grid2 size={{ xs: 12, md: 8, lg: 6 }}>
                    <Box component="form" noValidate autoComplete="off">
                        {/* Name */}
                        <div>
                            <TextField classes={{ root: 'input-control' }} label="Name" required name="name" id="customer-name" aria-describedby="customer-name" variant="standard" defaultValue={customerData.name} onChange={handleChange} />
                        </div>

                        {/* PhoneNo */}
                        <div>
                            <TextField label="Phone Number" required name="phoneNo" id="customer-phoneno" aria-describedby="customer-phoneno" variant="standard" defaultValue={customerData.phoneNo} onChange={handleChange} />
                        </div>

                        {/* Address */}
                        <div>
                            <TextField label="Address" required name="line1" aria-describedby="customer-address" variant="standard" defaultValue={customerData.address.line1} onChange={handleChange} />
                            <TextField name="state" required label="State" variant="standard" defaultValue={customerData.address.state} onChange={handleChange} />
                            <TextField name="zipcode" required label="Pincode" variant="standard" defaultValue={customerData.address.zipcode} onChange={handleChange} />
                        </div>

                        {/* Submit */}
                        <div>
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Box>
                </Grid2>
            </Grid2>
        </>
    )
}

export default AddCustomer;