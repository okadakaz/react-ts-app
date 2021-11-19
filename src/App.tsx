import React from 'react';
import { Button, ChakraProvider } from "@chakra-ui/react"
import './App.css';
import theme from "./theme/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">test</Button>
      <p>あいうえおあお</p>
    </ ChakraProvider>
  );
}

export default App;
