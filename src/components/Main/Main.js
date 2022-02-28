import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledCarousel,
} from 'reactstrap';
import Header from '../Navbars/Header';
import Footer from '../Footers/Footer';

const Main = () => {
  const items = [
    {
      src: require('assets/img/theme/analytical-Services.png'),
      altText: '',
      caption: '',
      header: '',
    },
    {
      src: require('assets/img/theme/covid_19_research.png'),
      altText: '',
      caption: '',
      header: '',
    },
  ];
  return (
    <>
      <Header />
      <main>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="py-lg-md d-flex pt-lg-5">
              <div className="col px-0">
                <Row className="mb-3">
                  <Col className="mb-lg-auto" lg="12">
                    <div className="rounded shadow-lg overflow-hidden">
                      <UncontrolledCarousel items={items} />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="12">
                    <h1 className="display-3 text-white">
                      TRC Canada Products for Innovative Research
                    </h1>
                    <p className="lead text-white">
                      With more than 50,000 products in inventory, TRC's
                      expanding product lines includes unique, highly
                      specialized chemicals for drug development, medical and
                      biochemical research.
                    </p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="12">
                    <h1 className="display-3 text-white">
                      New Products - In Stock
                    </h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div
                              className="mb-4 text-center"
                              style={{ minHeight: '160px' }}
                            >
                              <img
                                alt="..."
                                className="img-fluid"
                                src={require('assets/img/product/A130000.png')}
                                style={{ maxHeight: '160px' }}
                              />
                            </div>
                            <h6 className="text-primary text-uppercase" style={{ height: '45px' }}>
                              Aceclidine Hydrochloride
                            </h6>
                            <p className="description mt-3">
                              Catalogue Number :
                              <span className="font-weight-bolder">
                                {' '}
                                A130000
                              </span>
                            </p>
                            <p className="description mt-3">
                              CAS :
                              <span className="font-weight-bolder">
                                {' '}
                                6109-70-2
                              </span>
                            </p>
                            <Button color="default" type="button">
                              Details
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div
                              className="mb-4 text-center"
                              style={{ minHeight: '160px' }}
                            >
                              <img
                                alt="..."
                                className="img-fluid"
                                src={require('assets/img/product/M547913.png')}
                                style={{ maxHeight: '160px' }}
                              />
                            </div>
                            <h6 className="text-primary text-uppercase" style={{ height: '45px' }}>
                              Monohydroxy Sugammadex Sodium
                            </h6>
                            <p className="description mt-3">
                              Catalogue Number :
                              <span className="font-weight-bolder">
                                {' '}
                                M547913
                              </span>
                            </p>
                            <p className="description mt-3">CAS : --</p>
                            <Button color="default" type="button">
                              Details
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div
                              className="mb-4 text-center"
                              style={{ minHeight: '160px' }}
                            >
                              <img
                                alt="..."
                                className="img-fluid"
                                src={require('assets/img/product/M547923.png')}
                                style={{ maxHeight: '160px' }}
                              />
                            </div>
                            <h6 className="text-primary text-uppercase" style={{ height: '45px' }}>
                              Monochloro Sugammadex Sodium
                            </h6>
                            <p className="description mt-3">
                              Catalogue Number :
                              <span className="font-weight-bolder">
                                {' '}
                                M547923
                              </span>
                            </p>
                            <p className="description mt-3">CAS : --</p>
                            <Button color="default" type="button">
                              Details
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
