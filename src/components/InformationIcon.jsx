import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const InformationIcon = () => {
    return (
        <div className="flex items-center text-2xl">
            <FontAwesomeIcon icon={faCircleQuestion} color="#4C1D95" className="mr-2" />
        </div>
    );
};

export default InformationIcon;
