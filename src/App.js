import { mainHeader, toLearnList } from './components/Header';
import PaintingList from './components/PaintingList';
import Painting from './components/Painting';
import Section from './components/Section';
import paintings from './paintings.json';

function App() {
  return (
    <div>
      {mainHeader}
      {toLearnList}
      <Section title={'Main Section'}>
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}

export default App;
