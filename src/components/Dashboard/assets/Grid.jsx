import React from "react";
import { StatCards } from "./Cards";

const Grid = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12 max-w-5xl w-full mx-auto">
            <StatCards />
        </div>
    );
}

export default Grid;