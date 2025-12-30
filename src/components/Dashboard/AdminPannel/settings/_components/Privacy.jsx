import React from 'react';
import EditSection from '../../editor/EditSection';

const Privacy = () => {
    const privacy = 'This is Privacy section'
    return (
        <div>
            <EditSection data={privacy} />
        </div>
    );
};

export default Privacy;