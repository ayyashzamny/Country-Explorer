import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginWithOTP = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpInputs, setOtpInputs] = useState(Array(6).fill(''));

    const handleSendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
            setMessage(response.data.message);
            setStep(2);

            Swal.fire({
                title: 'OTP Sent!',
                text: 'Please check your email for the OTP.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.message || 'Error sending OTP');
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send OTP. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const otpCode = otpInputs.join('');
            const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp: otpCode });
            setMessage(response.data.message);

            if (response.data.message === 'Login successful') {
                // Store token in localStorage or sessionStorage
                localStorage.setItem('authToken', response.data.token);

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful!',
                    icon: 'success',
                    confirmButtonText: 'Go to Home'
                }).then(() => {
                    window.location.href = '/'; // Redirect to Home page
                });
            }
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.message || 'Error verifying OTP');
            Swal.fire({
                title: 'Error!',
                text: 'Invalid OTP. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };


    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        const newOtpInputs = [...otpInputs];
        newOtpInputs[index] = value;
        setOtpInputs(newOtpInputs);

        // Focus next input field automatically after entering a value
        if (value && index < otpInputs.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
            <div className="card p-4 shadow">
                <h2 className="text-center mb-4">Login with Email OTP</h2>

                {step === 1 && (
                    <>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            className="btn btn-primary w-100"
                            onClick={handleSendOTP}
                        >
                            Send OTP
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                {otpInputs.map((_, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength="1"
                                        className="form-control otp-box text-center"
                                        value={otpInputs[index]}
                                        onChange={(e) => handleOtpChange(e, index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            className="btn btn-success w-100"
                            onClick={handleVerifyOTP}
                        >
                            Verify OTP
                        </button>
                    </>
                )}

                {message && (
                    <p
                        className="mt-3 text-center"
                        style={{ color: message.includes('successful') ? 'green' : 'red' }}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoginWithOTP;
