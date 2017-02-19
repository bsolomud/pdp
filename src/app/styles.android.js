import { StyleSheet, Dimensions } from 'react-native'

const { width, heigth } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30
  },
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.8,
    borderBottomColor: 'mediumpurple'
  },
  button: {
    flex: 0.2,
    backgroundColor: 'mediumpurple',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'mediumslateblue',
    height: 60,

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    marginTop: 10,
    alignItems: 'center'
  },
  listElement: {
    marginBottom: 51,
    width: 50,
    alignItems: 'center',
    backgroundColor: 'mediumpurple',
  },
  listText: {
    fontSize: 18,
    color: 'white'
  }
});
