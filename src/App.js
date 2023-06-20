import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import SearchArea from './components/SearchArea';
import MediaCard from './components/Card';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom/dist';
import CompanyHeader from './components/CompanyHeader';
import CompanyCard from './components/CompanyCard';
import CompanyFooter from './components/CompanyFooter';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><CompanyHeader/><CompanyCard/><CompanyFooter/></Layout>}></Route>
          <Route path="/:id" element={<Layout><SearchArea /><MediaCard /></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
