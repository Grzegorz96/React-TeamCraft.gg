import React from "react";
import { useGeneratorData } from "../../context/generator/GeneratorProvider";

export default function HistoryComponent() {
    console.log(useGeneratorData());
    return <div className="main__container">to jest historia</div>;
}
