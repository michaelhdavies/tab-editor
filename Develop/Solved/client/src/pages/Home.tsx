import { useQuery } from '@apollo/client';

import TabList from '../components/TabList/index.tsx';
import TabForm from '../components/TabForm/index.tsx';

import { QUERY_TABS } from '../utils/queries.ts';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TABS);
  const tabs = data?.tabs || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TabForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TabList
              tabs={tabs}
              title="Some Feed for Tab(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
