import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TAB } from '../../utils/mutations';
import { QUERY_TABS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const TabForm = () => {
    const [tabContent, setTabContent] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addTab, { error }] = useMutation
    (ADD_TAB, {
        refetchQueries: [
            QUERY_TABS,
            'getTabs',
            QUERY_ME,
            'me'
        ]
    });
    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await addTab({
                variables: { input: {
                    tabContent,
                    tabAuthor: Auth.getProfile().data.username,
                }},
            });
            setTabContent('');
        } catch (err) {
            console.error(err)
        }
    };
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === 'tabContent' && value.length <= 200) {
            setTabContent(value);
            setCharacterCount(value.length);
        }
    };
    return (
    <div>
          <h3>What's on your techy mind?</h3>
    
          {Auth.loggedIn() ? (
            <>
              <p
                className={`m-0 ${
                  characterCount === 280 || error ? 'text-danger' : ''
                }`}
              >
                Character Count: {characterCount}/280
              </p>
              <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
              >
                <div className="col-12 col-lg-9">
                  <textarea
                    name="tabContent"
                    placeholder="Here's a new tab..."
                    value={tabContent}
                    className="form-input w-100"
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                </div>
    
                <div className="col-12 col-lg-3">
                  <button className="btn btn-primary btn-block py-3" type="submit">
                    Add Tab
                  </button>
                </div>
                {error && (
                  <div className="col-12 my-3 bg-danger text-white p-3">
                    {error.message}
                  </div>
                )}
              </form>
            </>
          ) : (
            <p>
              You need to be logged in to share your tabs. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
    );
};

export default TabForm;