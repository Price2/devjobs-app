import React from 'react';
import './App.css';
import Layout from './components/Layout';
import SearchArea from './components/SearchArea';
import MediaCard from './components/Card';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom/dist';
import CompanyHeader from './components/CompanyHeader';
import CompanyCard from './components/CompanyCard';
import CompanyFooter from './components/CompanyFooter';
import { ThemeProvider, ThemeContext } from './components/ThemeToggler';

function App() {
  const [input, setInput] = React.useState({})
  

  const queryInput = (filter) => {
    setInput(filter)
    console.log('im here in app ', filter)
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ThemeProvider>
              <Layout>
                <SearchArea filters={queryInput} />
                <MediaCard searchCriteria={input} />
              </Layout>
            </ThemeProvider>
          }>

          </Route>
          <Route exact path="/:id" element={
            <ThemeProvider>
              <Layout>
                <CompanyHeader />
                <CompanyCard />
                <CompanyFooter />
              </Layout>
            </ThemeProvider>
          }>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
