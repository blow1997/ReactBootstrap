import React from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ti from "../components/ti.jpg";

const Para = styled.div`
  font-size : 24px;
  text-align : justify; 
  .jumbo{
    background : url(${ti}) no-repeat fixed bottom;
    height : 60vh;
    border-radius : 0;
  }
  #fr{
    text-decoration : underline;
  }
`;
export const Home = () => (
  <Para>
    <Jumbotron className="jumbo">
      <Container>
        <h1>This is going to be the home page</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h1 id="fr">Welcome Pizza</h1>
      <p>Insipidity the sufficient discretion imprudence resolution sir him decisively.
      Proceed how any engaged visitor. Explained propriety off out perpetual his you.
      Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
      Insipidity the sufficient discretion imprudence resolution sir him decisively.
      Proceed how any engaged visitor. Explained propriety off out perpetual his you.
      Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
      Insipidity the sufficient discretion imprudence resolution sir him decisively.
      Proceed how any engaged visitor. Explained propriety off out perpetual his you.
      Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
      Insipidity the sufficient discretion imprudence resolution sir him decisively.
      Proceed how any engaged visitor. Explained propriety off out perpetual his you.
      Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
      Insipidity the sufficient discretion imprudence resolution sir him decisively.
      Proceed how any engaged visitor. Explained propriety off out perpetual his you.
      Feel sold off felt nay rose met you. We so entreaties cultivated astonished is.
      </p>
      <Button>HAi</Button>
    </Container>
  </Para>
)
