import React from 'react';
import { Container, Box } from "@material-ui/core"

import { Basket } from "./componentes/Register/Basket"
import { Product } from "./componentes/Register/Product"
import SearchAppBar from './componentes/Header';

const App = function () {
  

  return (
    <div className="App">
      <SearchAppBar/>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Product />
        </Box>
        <Box mt={5} mb={5}>
          <Basket />
        </Box>
      </Container>
    </div>
  );
};

export default App;