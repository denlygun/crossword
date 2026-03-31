import React from "react";
import Button from "./Button";

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        text: { control: "text" },
        onClick: { action: "clicked" },
    },
};

export const Default = {
    args: {
        text: "Click me",
    },
};

export const Secondary = {
    args: {
        text: "Cancel",
    },
};

export const LongText = {
    args: {
        text: "Start New Crossword Game",
    },
};