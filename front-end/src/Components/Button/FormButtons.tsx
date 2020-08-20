import React from 'react';

interface FormButtonsProps{
    width?: string
}

export const FormButtons: React.FC<FormButtonsProps> = ({ width, children }) => {
    return (
        <div className="form-group text-center" style={{ width: `${width || "50%"}`}}>
            {children}
        </div>
    );
}