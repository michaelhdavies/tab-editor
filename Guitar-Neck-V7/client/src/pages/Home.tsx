import NeckBox from '../components/NeckBox.js';
import ButtonsBox from '../components/ButtonsBox.js';
import LiveArray from '../components/LiveArray.js';
import LiveTabs from '../components/LiveTabs.js';
import DisplayTabs from '../components/DisplayTabs.js';

const Home = () => {
  return (
    <>
      <div className="pageLayout">
        <LiveArray />
        <NeckBox />
        <div className="bottomRow">
          <div className="tabs">
            <LiveTabs />
          </div>
          <ButtonsBox />
          <DisplayTabs />
        </div>
      </div>
    </>
  );
};

export default Home;
