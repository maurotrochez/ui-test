import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import Page from './page';

const Home = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    const onSearch = async () => {
        try {
            const result = await axios(
                `${API_URL}${employeeId && "/" + employeeId}`,
            );
            if (employeeId) {
                setData([result.data.content]);
            }
            else {
                setData(result.data.content);
            }

            setSuccess(result.data.success);

        } catch (error) {
            setErrors(error.response.data.errorList);
            setSuccess(error.response.data.success);
        }

    }

    const onChangeEmployeeId = (id) => {
        setEmployeeId(id);
    }

    return (
        <Page onChangeEmployeeId={onChangeEmployeeId}
            onSearch={onSearch} 
            data={data} 
            success={success} 
            errors={errors}
            employeeId={employeeId} />
    );
}

export default Home;