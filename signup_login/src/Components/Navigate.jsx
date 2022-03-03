import { Button, Col, Row } from "antd"
import { Link } from "react-router-dom"

export const Nav =()=>{
    return  <Row >
    <Col  span={6}>
      <Button><Link to="/">
          Home
          </Link>
          </Button>
    </Col>
    <Col span={6} >
    <Button ><Link to="/login">
        Login
          </Link>
          </Button>
    </Col>
    <Col >
    <Button ><Link to="/user">
        User
          </Link>
          </Button>
    </Col>
  </Row>
}