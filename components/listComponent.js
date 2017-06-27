import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from '../actions/actions'

let styles

export default class PeopleList extends React.Component{
     render(){
    const {
      container,
      text,
      button,
      buttonText
    } = styles
    const { people, isFetching, getPeople } = this.props;
      return(
      <View style={container}>
        <Text style={text}>Redux Example</Text>
        <TouchableHighlight style={button} onPress={getPeople}>
          <Text style={buttonText}>Load People</Text>
        </TouchableHighlight>
        {
          people.isFetching && <Text>Loading...</Text>
        }
        {
          people.length ? (
            people.map((person, i) => {
              return <View key={i} >
                <Text>Name: {person.name}</Text>
                <Text>Birth Year: {person.birth_year}</Text>
              </View>
            })
          ) : null
        }
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})