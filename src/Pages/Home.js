import React, { Component } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import Slider from '../Components/Slider';

export default class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <Container className='m-auto d-flex '>
          
          <Card className='m-4' style={{width: '18rem' }}>
            <Card>
              <Card.Img
                variant='top'
                src='https://zakonpravorf.ru/wp-content/uploads/2021/01/stress.jpg'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Itaque earum rerum hic tenetur a sapiente delectus, 
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus?
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Card>

          <Card className='m-4' style={{width: '18rem' }}>
            <Card>
              <Card.Img
                variant='top'
                src='https://zakonpravorf.ru/wp-content/uploads/2021/01/stress.jpg'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Itaque earum rerum hic tenetur a sapiente delectus, 
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus?
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Card>

          <Card className='m-4' style={{width: '18rem' }}>
            <Card>
              <Card.Img
                variant='top'
                src='https://zakonpravorf.ru/wp-content/uploads/2021/01/stress.jpg'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Itaque earum rerum hic tenetur a sapiente delectus, 
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus?
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Card>

          <Card className='m-4' style={{width: '18rem' }}>
            <Card>
              <Card.Img
                variant='top'
                src='https://zakonpravorf.ru/wp-content/uploads/2021/01/stress.jpg'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Itaque earum rerum hic tenetur a sapiente delectus, 
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus?
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Card>

          
        </Container>
      </>

    )
  }
}
