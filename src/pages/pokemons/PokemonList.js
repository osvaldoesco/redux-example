import React from 'react';
import { connect } from 'react-redux';

import { 
  fetchRequest,
} from '../../actions/pokemon.action';
import PokemonListComponent  from '../../components/pokemons/PokemonList';

class  PokemonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      some: 'some',
    }
  }

  componentDidMount(){
    const { 
      fetchPokemonList, 
    } = this.props;
    fetchPokemonList();
  
  }

  render() {
    const { error, loading, pokeCards } = this.props;
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <PokemonListComponent 
            error={error} 
            loading={loading}
            pokeCards={pokeCards}/>
        </div>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonList: () => dispatch(fetchRequest()),
  }
}

const mapStateToProps = (state) =>{
  const {error, loading, list} = state.pokemons;
  return {
    error,
    loading,
    pokeCards: list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
