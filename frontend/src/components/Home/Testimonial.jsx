import "./Testimonial.css";
import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const testimonialList = [
    [
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
            name: "Aksay Kumar",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
            name: "Raima Ray",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
            name: "Arjun Kapur",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
    ],
    [
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
            name: "Aksay Kumar",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
            name: "Raima Ray",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
        {
            img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
            name: "Arjun Kapur",
            designation: "Founder / CEO",
            comment:
                "An activity that requires a person's mental or physical effort is work.If a person is trained for a certain type of job, they may have a job.",
        },
    ],
];

const TestimonialItem = ({ testimonial }) => {
    return (
        <Row>
            {testimonial.map((item, i) => {
                const { img, name, designation, comment } = item;
                return (
                    <Col xs={12} lg={4} key={i}>
                        <Card className="ezy__testimonial23-item border-0 p-4 mt-4">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="me-3">
                                        <img
                                            src={img}
                                            alt=""
                                            className="img-fluid rounded-circle border"
                                            width="65"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fs-5">{name}</h4>
                                        <p className="mb-0 small">{designation}</p>
                                    </div>
                                </div>
                                <p className="opacity-75">{comment}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

TestimonialItem.propTypes = {
    testimonial: PropTypes.array.isRequired,
};

const Shapes = () => (
    <>
        <svg
            className="ezy__testimonial23-shape-one"
            width="404"
            height="572"
            viewBox="0 0 404 572"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="118"
                cy="286"
                r="265.5"
                stroke="#4175DF"
                strokeOpacity="0.2"
                strokeWidth="41"
            />
        </svg>
        <svg
            className="ezy__testimonial23-shape-two"
            width="269"
            height="479"
            viewBox="0 0 269 479"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="239.5"
                cy="239.5"
                r="239.5"
                fill="#FC4755"
                fillOpacity="0.25"
            />
        </svg>
    </>
);

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    return (
        <section className="ezy__testimonial23 light">
            <Shapes />

            <Container>
                <Row className="align-items-center justify-content-between mb-4 mb-md-5">
                    <Col xs={12} md={6} lg={4}>
                        <h2 className="ezy__testimonial23-heading mb-0">
                            Everyone should believe in What Our Client Say.
                        </h2>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <p className="ezy__testimonial23-sub-heading mb-0">
                            Jobs can be categorized as paid or unpaid. Examples of unpaid jobs
                            include volunteer, homemaker, mentor, student, and sometimes
                            intern.
                        </p>
                    </Col>
                </Row>

                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={true}
                >
                    {testimonialList.map((testimonial, i) => (
                        <Carousel.Item key={i}>
                            <TestimonialItem testimonial={testimonial} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default Testimonial;
