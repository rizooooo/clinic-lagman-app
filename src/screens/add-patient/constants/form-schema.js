import { InputTypes } from "../../../core/types";

const config = (params = {}) => {
    return [
        {
            row: 1,
            cols: [
                {
                    name: 'first_name',
                    label: 'First Name',
                    size: 12,
                    type: InputTypes.Text,
                    placeholder: 'Enter First Name',
                    rules: {
                        required: 'First Name is required',
                    }
                },


            ]
        },
        {
            row: 2,
            cols: [
                {
                    name: 'last_name',
                    label: 'Last Name',
                    size: 12,
                    type: InputTypes.Text,
                    placeholder: 'Enter Last Name',
                    rules: {
                        required: 'Last Name is required',
                    }
                },
            ]
        },
        {
            row: 3,
            cols: [
                {
                    name: 'middle_name',
                    label: 'Middle Name',
                    size: 12,
                    type: InputTypes.Text,
                    placeholder: 'Enter Middle Name',
                    rules: {
                        required: 'Middle Name is required',
                    }
                },
            ]
        },
        {
            row: 4,
            cols: [
                {
                    name: 'gender',
                    label: 'Gender',
                    size: 6,
                    type: InputTypes.Radio,
                    placeholder: 'Select Gender',
                    rules: {
                        required: 'Gender is required',
                    },
                    items: [
                        {
                            label: 'Male'
                        },
                        {
                            label: 'Female'
                        }
                    ]
                },
                {
                    name: 'status',
                    label: 'Status',
                    size: 6,
                    type: InputTypes.Select,
                    placeholder: 'Select Status',
                    rules: {
                        required: 'Status is required',
                    },
                    items: [
                        {
                            name: 'Single'
                        },
                        {
                            name: 'Married'
                        },
                        {
                            name: 'Widow'
                        },
                    ]
                },
            ]
        },
        {
            row: 4,
            cols: [
                {
                    name: 'date_of_birth',
                    label: 'Date Of Birth',
                    size: 12,
                    type: InputTypes.Date,
                    placeholder: 'Select Date of Birth',
                    rules: {
                        required: 'Date of Birth is required',
                    },
                },
            ]
        },
        {
            row: 4,
            cols: [
                {
                    name: 'age',
                    label: 'Age',
                    size: 12,
                    type: InputTypes.Number,
                    placeholder: 'Enter Age',
                    rules: {
                        required: 'Age is required',
                    },
                },
            ]
        },
        {
            row: 5,
            cols: [
                {
                    name: 'telephone_no',
                    label: 'Telephone Number',
                    size: 6,
                    type: InputTypes.Number,
                    placeholder: 'Enter Telephone Number',
                    rules: {
                        required: 'Telephone Number is required',
                    },
                },
                {
                    name: 'mobile_no',
                    label: 'Mobile Number',
                    size: 6,
                    type: InputTypes.Number,
                    placeholder: 'Enter Mobile Number',
                    rules: {
                        required: 'Mobile Number is required',
                    },
                },
            ]
        },
        {
            row: 6,
            cols: [
                {
                    name: 'address',
                    label: 'Address',
                    size: 12,
                    type: InputTypes.TextArea,
                    placeholder: 'Enter Address',
                    rules: {
                        required: 'Address is required',
                    },
                },
            ]
        },
    ]
}

export default config;