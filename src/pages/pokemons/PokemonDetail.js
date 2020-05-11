import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { 
  fetchDetailError,
  fetchDetailRequest,
  fetchDetailSuccess
} from '../../actions/pokemon.action';

import { fetchPokemonDetail } from '../../api/pokemon.api';

function PokemonDetail() {
  const dispatch = useDispatch();
  const routerParams = useParams();
  const { id } = routerParams;

  const { selected, error, loading } = useSelector(({pokemons}) => pokemons);

  useEffect(() => {
    dispatch(fetchDetailRequest());
    fetchPokemonDetail(id)
      .then(({card: selected}) => {
        console.log('Detail', selected);
        dispatch(fetchDetailSuccess(selected));
      })
      .catch(err => {
        dispatch(fetchDetailError());
        console.log('err', err);
      });
  }, [dispatch, id]);

  if (error) {
    return (
      <div className="alert alert-danger">
        <strong>Error!</strong> There was a problem fetching your pokecard.
      </div>
    );
  }
    
  if (loading) {
    return ( 
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={selected?.imageUrlHiRes} alt="Pokecard" style={{width: '100%'}}/>
      </div>
      <div className="col-md-5">
        <table className="table table-dark">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{selected?.name}</td>
            </tr>
            <tr>
              <th scope="row">Types</th>
              <td>
                {selected?.types?.join(',')}
              </td>
            </tr>
            <tr>
              <th scope="row">Attacks</th>
              <td>
                {selected?.attacks?.map((attack) => {
                  return (
                    <p>
                      <b>{attack.name}: </b>
                      {attack.text}
                    </p>
                  )
                })}
              </td>
            </tr>
            <tr>
              <th scope="row">Weaknesses</th>
              <td>
                {selected?.weaknesses?.map((weakness) => {
                  return (`${weakness.type} `);
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PokemonDetail;