import { VStack } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar';
import Redirect from './components/redirect/Redirect';
import Home from './pages/home';
import SnippetDetail from './pages/snippetDetail/snippetDetail';
import SnippetsPage from './pages/snippets';
import WorkDetail from './pages/workDetail';
import WorkPage from './pages/works';

function App() {
  return (
    <VStack
      bg={'#F1f1f1'}
    >
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path='/works' element={<WorkPage />} />
        <Route path='/snippets' element={<SnippetsPage />} />
        <Route
          path="/snippets/:title"
          element={<SnippetDetail />}
        />
        <Route
          path="/works/:title"
          element={<WorkDetail />}
        />
      </Routes>
    </VStack>
  )
}

export default App
