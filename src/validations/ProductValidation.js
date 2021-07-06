import * as yup from "yup";

export const productSchema = yup.object().shape({
    productName:yup.string().max(50,"Product name should be lesser than 50 charachters").required("Product name is required"),
    category:yup.string().oneOf(["Laptop","Phone","Tablet","Book"]),
    description:yup.string().required("Description is required"),
    price:yup.string().matches(/^\d+$/,"Price should contain only numbers"),
    imageUrl:yup.string().url("Invalid URL").required("Image URL is required")
})