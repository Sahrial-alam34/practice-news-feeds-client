/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <Header></Header>
            
            <Container>
               
               
                <Row>
                    <Col lg={6} sm>
                        <h2>left</h2>
                    </Col>
                    <Col lg={6} sm>
                        <h2>main content</h2>
                    </Col>
                    <Col lg={6} sm>
                        <h2>right</h2>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;