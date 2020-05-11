import React from 'react';
import { connect } from 'react-redux';

import { 
  fetchDetailError,
  fetchDetailRequest,
  fetchDetailSuccess
} from '../../actions/pokemon.action';

import { fetchPokemonDetailApi } from '../../api/pokemon.api';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      some: 'some',
    }
  }

  componentDidMount(){
    const { 
      match,
      fetchPokemon, 
      fetchPokemonSuccess,
      fetchPokemonError, 
    } = this.props;
    fetchPokemon();
    fetchPokemonDetailApi(match.params.id)
      .then(({card: selected}) => {
        console.log('Detail', selected);
        fetchPokemonSuccess(selected);
      })
      .catch(err => {
        fetchPokemonError();
        console.log('err', err);
      });
  }

  render() {
    console.log('props', this.props);
    const {error, loading, selected} = this.props;
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
                      <p key={`${attack.name}`}>
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
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemon: () => dispatch(fetchDetailRequest()),
    fetchPokemonSuccess: (selected) =>  dispatch(fetchDetailSuccess(selected)),
    fetchPokemonError: () =>  dispatch(fetchDetailError()),
  }
}

const mapStateToProps = ({pokemons}) =>{
  const {error, loading, selected} = pokemons;
  return {
    error,
    loading,
    selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);