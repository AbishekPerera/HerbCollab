import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import { Button, Card, Col, Row } from "react-bootstrap";

const NewsPage = () => {
  return (
    <div>
      <Header />
      <div className="news-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-newspage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">News</h1>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span class="ltn__secondary-color">
                            <i class="bi bi-house-fill"></i>
                          </span>
                          Home
                        </Link>
                      </li>
                      <li>News</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
        <div className="news-page-lowerbody">
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* add grid classes */}
            <Col key={1}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-partnership-with-AIESEC-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={2}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-partnership-with-AIESEC-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={3}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-partnership-with-AIESEC-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={4}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-partnership-with-AIESEC-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col key={5}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.lankahospitals.com/wp-content/uploads/2022/03/Lanka-Hospitals-partnership-with-AIESEC-1024x1024-1.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
