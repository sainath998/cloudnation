import { Box, ChakraProvider } from '@chakra-ui/react'
import { Navbar, Header, Categories, Footer } from './components/index.js';
import './App.css';
import Category from './components/categories/Category.jsx';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Navbar />
        <Categories />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App;