import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            height="30"
            className="py-1"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for products, brands and more"
            className="mr-auto"
            aria-label="Search"
            style={{ borderRadius: 0, width: "550px" }}
          ></FormControl>
        </Form>
        <Nav
          className="ml-auto"
          style={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Nav.Link
            href="#home"
            className="px-4"
            style={{
              color: "blue",
              backgroundColor: "white",
            }}
          >
            <i className="fas fa-user" /> Login
          </Nav.Link>
          <Nav.Link href="#features" style={{ color: "white" }}>
            <i className="fas fa-plus" /> More
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#pricing">
            <i className="fas fa-shopping-cart" /> Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
