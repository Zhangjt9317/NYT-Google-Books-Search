import React from 'react';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://wallpapercave.com/wp/wp2036897.jpg">
                <h1>Books</h1>
                <h2>You can find any kind of book here</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to the Sky of Books!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library. <hr></hr>
                            ― Jane Austen, Pride and Prejudice
                        </p>

                        <p>
                            If there's a book that you want to read, but it hasn't been written yet, then you must write it. <hr></hr>
                            ― Toni Morrison
                        </p>

                        <p>
                            Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.
                            ― Neil Gaiman, Coraline
                        </p>

                        <p>
                            If you only read the books that everyone else is reading, you can only think what everyone else is thinking.
                            ― Haruki Murakami, Norwegian Wood
                        </p>

                        <p>
                            Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.
                            ― John Green, The Fault in Our Stars
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default About;