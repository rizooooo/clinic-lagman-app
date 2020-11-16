import { InputTypes } from "../../../core/types";

const config = (params = {}) => {
    return [
        {
            row: 1,
            cols: [
                {
                    name: 'email',
                    label: 'Email',
                    size: 12,
                    type: InputTypes.Text,
                    placeholder: 'Enter Email',
                    rules: {
                        required: 'Email is required',
                    }
                },


            ]
        },
        {
            row: 2,
            cols: [
                {
                    name: 'password',
                    label: 'Password',
                    size: 12,
                    type: InputTypes.Text,
                    placeholder: 'Enter Password',
                    rules: {
                        required: 'Password is required',
                    }
                },
            ]
        },
    ]
}

export default config;