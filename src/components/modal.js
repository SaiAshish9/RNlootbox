import React, {useState, useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context as AuthContext} from '../api/contexts/authContext'


const App = ({msg}) => {
  
    const [modalVisible, setModalVisible] = useState(true);
    const {removeError} = useContext(AuthContext)


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <TouchableOpacity
              style={{...styles.openButton}}
              onPress={() => {
                setModalVisible(!modalVisible);
                removeError()
              }}>
              <Text style={styles.textStyle}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginVertical: 40,
    backgroundColor: '#393743',
    // opacity:0.4,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Michroma-Regular',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#ECDBFA',
    // fontSize:22,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;
