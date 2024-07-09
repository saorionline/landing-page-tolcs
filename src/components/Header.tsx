import React from "react";

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="mx-auto max-w-screen-xl p-8 py-8">
            <h1 className="mb-4">
                <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {title}
                </span>
            </h1>
            <div className="border-b border-hair"></div>
        </div>
    )
};

export default Header;

