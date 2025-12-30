import React from 'react';
import EditSection from '../../editor/EditSection';

const Terms = () => {
     const terms = 'This is Terms section'
    return (
        <div>
            <EditSection data={terms} />
        </div>
    );
};

export default Terms;