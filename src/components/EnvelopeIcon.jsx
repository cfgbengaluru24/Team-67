import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EnvelopeIcon = () => {
    return (
        <div className="flex items-center text-2xl">
            <FontAwesomeIcon icon={faEnvelope} color="#064E3B" className="mr-2" />
        </div>
    );
};

export default EnvelopeIcon;
