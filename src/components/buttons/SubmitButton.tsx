import React from 'react';

interface SubmitButtonProps {
    label: string,
    loading?: boolean
}
const SubmitButton: React.FC<SubmitButtonProps>= ({label,loading}) => {
    return (
        <button
            type="submit"
            disabled={loading}
        >
            {label}
        </button>
    );
};

export default SubmitButton;
