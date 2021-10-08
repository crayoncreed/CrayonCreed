import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceFormCmp from '../../Components/ServiceFormCmp/ServiceFormCmp';
// import IServiceForm from '../../interfaces/api/IServiceForm.type';
import CustomFunctions from '../../utils/CustomFunctions';
import swal from 'sweetalert';
// import Axios from '../../utils/axios';
import Axios from 'axios'


interface Props {
    path: string;
    title: string;
}

const ServiceForm = (props: Props) => {
    const initialState = {
        username: '',
        email: '',
        discord_id: '',
        telegram_id: '',
        nft_name: '',
        nft_to_mint: '',
        release_date: '',
    };

    // =========ERROR OBJECT
    const errorsObj = initialState;

    const [formObject, setFormObject] = useState<any>(initialState);
    const [formErrors, setFormErrors] = useState<any>(errorsObj);
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const isVal = CustomFunctions.IsNull(value);
        setFormObject((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
        switch (name) {
            case 'username':
            case 'discord_id':
            case 'telegram_id':
            case 'nft_name':
            case 'nft_to_mint':
            case 'release_date':
                setFormErrors((prevState: any) => ({
                    ...prevState,
                    [name]: isVal
                }));
                return;
            case 'email':
                const isValid = CustomFunctions.EmailValidate(value);
                setFormErrors((prevState: any) => ({
                    ...prevState,
                    [name]: isValid
                }));
                return;
            default:
                break;
        }
    }

    const submit = (event: any) => {
        event.preventDefault();
        const { username, email, discord_id, telegram_id, nft_name, nft_to_mint, release_date } = formObject;
        if (username && email && discord_id && nft_name && nft_to_mint && release_date
            && !formErrors.username && !formErrors.email && !formErrors.discord_id
            && !formErrors.nft_name && !formErrors.nft_to_mint && !formErrors.release_date) {
            const service_name = props.title;
            const body = { ...formObject, service_name };
            setIsLoading(true);
            Axios.post('https://crayoncreedapi.herokuapp.com/formData', body)
            .then((res: any) => {
                const resp = res.data;
                if (resp.Message === "Success") {
                    swal("We have captured your request. We will contact you soon...", "Thank You!", "success");
                    setFormObject(initialState);
                    setIsLoading(false);
                } else {
                    swal("Error Message!", '', "error");
                    setIsLoading(false);
                }
            }).
            catch((err: any) => {
                swal("Error Message!", '', "error");
                setIsLoading(false);
            })            
        } else {
            swal("Error Message!", "Please fill all input fields", "error");
        }
    }


    return (
        <div className="srv-frm">
            <Link to="/" className="go-back"><i className="fas fa-arrow-left mr-1" /> Go Back</Link>
            <div className="srv-frm-hdr">
                Reach out to us for
            </div>
            <h3 className="srv-frm-title">
                {props.title} NFT Launcher
            </h3>
            <p className="srv-frm-content">
            </p>
            <ServiceFormCmp
                formObject={formObject}
                formErrors={formErrors}
                isLoading={isLoading}
                handleChange={handleChange}
                submit={submit}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                <path fill="#0099ff" fillOpacity="0.3" d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
        </div>

    )
}

export default ServiceForm;
