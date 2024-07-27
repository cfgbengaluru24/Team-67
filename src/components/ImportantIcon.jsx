import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ImportantIcon = () => {
    return (
        <div className="flex items-center text-2xl">
            <FontAwesomeIcon icon={faCircleExclamation} color="#7F1D1D" className="mr-2" />
        </div>
    );
};

export default ImportantIcon;
