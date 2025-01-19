import React, { useState } from 'react';
import Modal from 'react-modal';


const NotifyModal = (props) => {
    // eslint-disable-next-line react/prop-types
    const { isOpen, setOpen } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [errors, setErrors] = useState({});
    console.log(isOpen)

    const validate = () => {
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!number.trim()) {
            errors.number = 'Number is required';
        } else if (!/^\d{10,15}$/.test(number)) {
            errors.number = 'Number is invalid (only digits, 10-15 characters allowed)';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Submit form
            console.log({ name, email, number });
            // Clear form and close modal
            setName('');
            setEmail('');
            setNumber('');
            if (setOpen) setOpen(false);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleClose = () => {
        if (setOpen) setOpen(false);
    };
    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Notify Modal"
            style={{
                content: {
                    maxWidth: '400px',
                    margin: 'auto',
                    padding: '20px',
                    borderRadius: '10px',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Number:</label>
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    {errors.number && <span style={{ color: 'red', fontSize: '12px' }}>{errors.number}</span>}
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="submit">Submit</button>
                    <button
                        type="button"
                        onClick={handleClose}
                        style={{
                            marginLeft: '10px',
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            cursor: 'pointer',
                        }}
                    >
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default NotifyModal;
