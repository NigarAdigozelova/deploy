import { Checkbox } from "@mui/material";
import * as yup from "yup";

export const Schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    unitPrice: yup
        .number("unitPrice should be a number")
        .required("unitPrice is required")
        .positive("unitPrice should be positive")
        .integer("unitPrice should be integer"),
    unitsInStock: yup
        .number("unitsInStock should be a number")
        .positive("unitsInStock should be positive")
        .integer("unitsInStock should be integer")
        .required("unitsInStock address is required"),
    discontinued: yup
        .required("discontinued is required"),
    quantityPerUnit: yup
        .required("quantityPerUnit is required"),
    categoryId: yup
        .required("categoryId is required"),

});

