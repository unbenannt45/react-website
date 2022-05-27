import React, { Component } from 'react'

import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">

                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                  <img src="https://avatars.mds.yandex.net/i?id=f7ff23a03a84c7abc4805aa9877094bc-4119753-images-thumbs&n=13" />
                  <p>
                    export 'default' imported as 'Tab' was not found in 'react-bootstrap'
                    possible exports: Accordion, AccordionButton, AccordionCollapse,
                    AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup,
                  </p>
                </Tab.Pane>
                
                <Tab.Pane eventKey="second">
                  <img src="https://avatars.mds.yandex.net/i?id=cb2145be811dedf634d43c7bbdc816c7-3608063-images-thumbs&n=13" />
                  <p>
                    export 'default' imported as 'Tab' was not found in 'react-bootstrap'
                    possible exports: Accordion, AccordionButton, AccordionCollapse,
                    AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup,
                    ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse,
                    Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl,
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img src="https://avatars.mds.yandex.net/i?id=7c8e93235efff18bca6fd3b70e47c950-4666607-images-thumbs&n=13" />
                  <p>
                    export 'default' imported as 'Tab' was not found in 'react-bootstrap'
                    possible exports: Accordion, AccordionButton, AccordionCollapse,
                    AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup,
                    ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse,
                    Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormContro
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img src="https://avatars.mds.yandex.net/i?id=77c538ef831b817888a2cb9acfbd74db-5486461-images-thumbs&n=13" />
                  <p>
                    export 'default' imported as 'Tab' was not found in 'react-bootstrap'
                    possible exports: Accordion, AccordionButton, AccordionCollapse,
                    AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup,
                    ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse,
                    Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img src="https://avatars.mds.yandex.net/i?id=4aa05f027ddf30b928723b865591249c-5877669-images-thumbs&n=13" />
                  <p>
                    export 'default' imported as 'Tab' was not found in 'react-bootstrap'
                    possible exports: Accordion, AccordionButton, AccordionCollapse,
                  </p>
                </Tab.Pane>
         
              </Tab.Content>
            </Col>
          </Row>

        </Tab.Container>
      </Container>
    )
  }
}
