import React from 'react'
import "./contact.scss"
const Contact = () => {
    return (
        <div className='Container'>
            <div className='main'>
                <form className="contact-form">
                    <label>
                        First Name:
                        <input
                            type="text"
                        />
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input
                            type="text"

                        />
                    </label>
                    <br />

                    <label>
                        Work Email:
                        <input
                            type="email"

                        />
                    </label>
                    <br />

                    <label>
                        Message:
                        <textarea

                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div></div>
    )
}
export default Contact