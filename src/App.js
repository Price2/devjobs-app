import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import SearchArea from './components/SearchArea';
import MediaCard from './components/Card';
function App() {

  return (
    <>
      <Layout>
        <SearchArea />
        <MediaCard/>
      </Layout>
    </>
  );
}

export default App;
