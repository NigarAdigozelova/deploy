import * as yup from "yup"
export const inputSchema = yup.object().shape({
    name: yup
        .string()
        .required("name is required"),
    quantityPerUnit: yup
        .string()
        .required("quantityPerUnit is required"),
    unitPrice: yup
        .number("unitPrice should be a number")
        .integer("unitPrice should be a integer")
        .positive("unitPrice should be a positive"),
    unitsInStock: yup
        .number("unitsInStock should be a number")
        .integer("unitsInStock should be a integer")
        .positive("unitsInStock should be a positive")



})