import { ChangeEvent, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { setSearchField, selectSearchField } from './store/search/search.slice';
import { setUsers, selectUsers } from './store/users/users.slice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch();
  const searchField = useSelector(selectSearchField);
  const users = useSelector(selectUsers);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        dispatch(setUsers(users));
      });
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(setSearchField(event.target.value));
    dispatch(setSearchField(event.target.value));
  };

  return (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList
            robots={users.filter((user) => {
              return user.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
            })}
          />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
