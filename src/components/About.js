import React from 'react'

export default function About(props) {

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className="mt-5">About Us</h1>

                <p className="mt-4" >
                    Welcome to our Text Manipulator website! This is a simple tool that allows you to enter text and perform basic manipulations such as converting text to uppercase and lowercase. Additionally, it provides statistics on the entered text, including the number of words, number of letters, and an estimated time to read the text.
                </p>

                <p>
                    We hope you find this tool useful for your text manipulation needs. If you have any feedback or suggestions, feel free to contact us.
                </p>

                <h2 className="mt-4">Contact Us</h2>
                <p>Email: TextManipulator@gmail.com</p>
                <p>Phone: +91 8005660130 </p>
            </div>
        </>
    )
}
