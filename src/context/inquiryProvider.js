import React, { useState } from 'react';
import InquiryContext from './inquiryContext';
import InquiryForm from '../templates/dialog/inquiry';

const InquiryProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const global = {
        handleOpen,
        handleClose
    }

    return (
        <>
            <InquiryContext.Provider value={global}>
                {children}
            </InquiryContext.Provider>
            <InquiryForm
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default InquiryProvider;