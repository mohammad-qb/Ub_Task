import { Box, VStack } from "@chakra-ui/react";
import { images } from "./common/images";
import { Typography } from "./components/Typography";
import { Button } from "./components/form/Buttons/Button";

function App() {
  return (
    <Box bg={`url(${images.homeBG})`} h={690}>
      <VStack p={5} spacing={3} align={"flex-start"}>
        <Typography weight={"bold"} size={"4xl"}>
          WELCOME TO
        </Typography>
        <Typography weight={"bold"} size={"4xl"}>
          YOUR JOURNEY THROUGH
        </Typography>
        <Typography weight={"bold"} size={"4xl"}>
          CUSTOMER EXPERIENCE
        </Typography>
        <Box pt={5}>
          <Button>Be part of the conversation</Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
