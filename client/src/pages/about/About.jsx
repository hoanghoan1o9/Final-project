import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./MainAboutBody.css";

const About = () => {
  return (
    <div className="wrapper">
      <Col className="mt-5" style={{ marginRight: 0 }}>
        <Col className="text-center">
          <Button
            className="button"
            variant="secondary"
            href="https://www.facebook.com/xchoang.hoan.1"
            size="lg"
          >
            Contact me via Facebook
          </Button>
        </Col>
      </Col>
    </div>
  );
};

export default About;
