import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

    const { isAuthenticated, user } = useAuth0();

    const Wrapper = styled.section`
        padding: 9rem 0 5rem 0;
        text-align: center;

        .container {
            margin-top: 6rem;

            .contact-form {
                max-width: 50rem;
                margin: auto;

                .contact-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;

                    input[type="submit"] {
                        cursor: pointer;
                        transition: all 0.2s;

                        &:hover {
                            background-color: ${({ theme }) => theme.colors.white};
                            border: 1px solid ${({ theme }) => theme.colors.btn};
                            color: ${({ theme }) => theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    `;

    return (
        <Wrapper>
            <h2 className="common-heading">Contact page</h2>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3156.8064539258976!2d90.42411356512496!3d23.91708984851268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52a982608df%3A0x45b8d1544d7d6427!2sSooner%20Siri%20park%20opposite!5e0!3m2!1sen!2sbd!4v1675126771827!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="my map"
            ></iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xjvdgepv" method="POST" className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={isAuthenticated ? user.name : ""}
                            required
                            autoComplete="off"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={isAuthenticated ? user.email : ""}
                            required
                            autoComplete="off"
                        />

                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Enter your message"
                            required
                            autoComplete="off"
                        ></textarea>

                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
