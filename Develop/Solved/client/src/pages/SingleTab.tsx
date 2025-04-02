import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_TAB } from '../utils/queries.ts';

const SingleTab = () => {
    const { tabId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_TAB, {
        variables: { tabId: tabId },
    });
    const tab = data?.tab || {};
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h3>{tab}</h3>
        </div>
    );
};

export default SingleTab;