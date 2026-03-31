import React from "react";
import CrosswordGrid from "./CrosswordGrid";

export default {
    title: "Game/CrosswordGrid",
    component: CrosswordGrid,
    argTypes: {
        grid: { control: "object" },
        onChange: { action: "cell changed" },
    },
};

// 🔹 тестові дані
const smallGrid = [
    ["C", "A", "T"],
    ["A", "", "R"],
    ["R", "A", "T"],
];

const emptyGrid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const largeGrid = [
    ["D", "O", "G", "", ""],
    ["", "A", "", "C", "A"],
    ["C", "A", "T", "", "R"],
    ["", "", "", "B", ""],
];

export const Default = {
    args: {
        grid: smallGrid,
        onChange: (r, c, value) => console.log(`Cell ${r},${c} = ${value}`),
    },
};

export const Empty = {
    args: {
        grid: emptyGrid,
        onChange: (r, c, value) => console.log(`Cell ${r},${c} = ${value}`),
    },
};

export const Large = {
    args: {
        grid: largeGrid,
        onChange: (r, c, value) => console.log(`Cell ${r},${c} = ${value}`),
    },
};