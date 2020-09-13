import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import orderService from '../services/orderService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class ShippingForm extends Form {
    state = {
        data: { country: "", city: "", address: "", postCode: "", notes: "" },
        errors: {}
    };

    schema = {
        country: Joi.string()
            .min(2)
            .max(50)
            .required()
            .label("Country"),
        city: Joi.string()
            .min(2)
            .max(50)
            .required()
            .label("City"),
        address: Joi.string()
            .min(5)
            .max(255)
            .required()
            .label("Address"),
        postCode: Joi.string()
            .min(5)
            .max(255)
            .required()
            .label("PostCode"),
        notes: Joi.string()
            .min(5)
            .max(255)
            .allow('')
            .label("Notes")
    };


    doSubmit = async () => {
        try {

            await orderService.placeOrder(this.state.data);

            toast.success("The order has been created successfully");

            return window.location = "/my-orders";


        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.country = ex.response.data;
                this.setState({ errors });
                toast.error(errors.country);
            }
        }
    };

    render() {
        return (
            <div>
                <h3>Shipping</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("country", "Country")}
                    {this.renderInput("city", "City")}
                    {this.renderInput("address", "Address")}
                    {this.renderInput("postCode", "PostCode")}
                    {this.renderInput("notes", "Notes")}

                    <div className="col-12 mt-2 d-flex justify-content-around">

                        <Link to="/products">
                            <button type="button" className="btn btn-danger">Cancel</button>
                        </Link>
                        {this.renderButton("Place Order")}
                    </div>
                </form>
            </div>
        );
    }
}

export default ShippingForm;