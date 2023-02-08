import Address from "./components/profile/Address";
import FullName from "./components/profile/Fullname";
import ProfilePhoto from "./components/profile/ProfilePhoto";

import {Container, Card,Button} from 'react-bootstrap'

function App() {
  return (
    <>
    <Container  fluid className="App">
      <Card className="cover">

     <ProfilePhoto/>
     <FullName/>
     <Address/>
     <Button variant="primary" size="lg" href="#">Contact me </Button>

     </Card>

    </Container >

    </>
  );
}

export default App;
