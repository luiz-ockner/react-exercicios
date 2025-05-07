import logo from './logo.svg';
import './App.css';
import GaleryList from './components/galeryList';

function App() {
  return (
    <div className="App">
      <GaleryList
        galery={[
          {
            image: "https://www.istockphoto.com/br/foto/mulher-jovem-tendo-uma-consulta-m%C3%A9dica-on-line-em-casa-gm1675712006-536216513?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=internet",
            title: "Item 1",
            description: "Descrição do item 1"
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Item 2",
            description: "Descrição do item 2"
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Item 3",
            description: "Descrição do item 3"
          }
        ]}
      />
    </div>
  );
}

export default App;
