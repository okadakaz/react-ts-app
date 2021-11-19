import React from 'react';
import { Button, ChakraProvider } from "@chakra-ui/react"
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">test</Button>
    </ChakraProvider>
  );
}

export default App;
