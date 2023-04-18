import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { actionCreators } from '../state';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { SearchRepositories } = useActions();
  // const state = useSelector((state) => state);
  // console.log(state);
  //const dispatch = useDispatch();
  const { data, error, isLoading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //dispatch(actionCreators.SearchRepositories(term) as any);
    SearchRepositories(term);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error &&
        !isLoading &&
        data.map((name) => {
          return (
            <ul>
              <li key={name}>{name}</li>
            </ul>
          );
        })}
    </>
  );
};

export default RepositoriesList;
