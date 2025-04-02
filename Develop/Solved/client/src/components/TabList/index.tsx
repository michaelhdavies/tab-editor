import { Link } from 'react-router-dom';

interface Tab {
    _id: string;
    tabContent: string;
    tabAuthor: string,
    createdAt: string,
}

interface TabListProps {
    tabs: Tab[];
    title: string;
}

const TabList: React.FC<TabListProps> = ({ tabs, title }) => {
    if (!tabs.length) {
        return <h3>No Tabs Yet</h3>
    }
    const strTabs: string = tabs.toString();
    return (
        <div>
            <h3>{title}</h3>
            <h3>{strTabs}</h3>
        </div>
    );
};

export default TabList;