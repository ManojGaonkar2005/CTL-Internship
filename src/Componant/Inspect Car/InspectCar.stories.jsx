import React from "react";
import InspectCar from "./InspectCar";

export default {
    title: "Component/Inspect Car/InspectCar", // Fixed 'titile' to 'title'
    component: InspectCar, // Fixed 'Componant' to 'component'
    parameters: {
        docs: {
            description: {
                component: "This component is used to inspect car details visually and interactively.",
            },
        },
    },
};

export const Default = () => <InspectCar />;
