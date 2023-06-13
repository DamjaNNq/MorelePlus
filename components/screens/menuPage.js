import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import axios, { isCancel, AxiosError } from 'axios';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const Search = ({ navigation }) => {

  const [searchText, setSearchText] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("szukaj w ofercie");
  const [value, setValue] = useState('name');
  const [items, setItems] = useState([
    { label: 'Nazwa produktu', value: 'name' },
    { label: 'Producent', value: 'manufacturer' }
  ]);

  //const navigation = useNavigation();
  const handlePress = (id) => {
    navigation.navigate('CategoryItem', { id: id });
  }
  const handleSearchN = (name) => {
    if (typeof name === 'string' && name.replace(/\s/g, '').length > 0) {

      navigation.navigate('SearchScreen', { name: name.trim() });
    } else {
      Alert.alert('Błąd', 'Wpisz nazwę przedmiotu');
    }
  }
  const handleSearchM = (manufacturer) => {
    if (typeof manufacturer === 'string' && manufacturer.replace(/\s/g, '').length > 0) {

      navigation.navigate('SearchScreen', { manufacturer: manufacturer });


    } else {
      Alert.alert('Błąd', 'Wpisz nazwę przedmiotu');
    }
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >

      <View style={styles.container}>

        <View style={styles.box}>
          <TextInput
            style={styles.buttonInput}
            placeholder={title}
            value={searchText}
            onChangeText={searchText => setSearchText(searchText)}
          />
          <TouchableOpacity onPress={() => {
            if (value === 'name') {
              handleSearchN(searchText);
            } else if (value === 'manufacturer') {
              handleSearchM(searchText);
            }
          }} style={styles.button}>

            <Feather name="chevron-right" size={30} />
          </TouchableOpacity>
          <View>

          </View>
        </View>
        
        <DropDownPicker
        style={styles.dropdown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={(selectedValue) => {
            setValue(selectedValue);
            setTitle(selectedValue);
          }}
          placeholder="Wybierz kategorie"
          searchable={false}
          onClose={() => console.log('closed')}
          onOpen={() => console.log('opened')}
        />



        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(1)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Laptopy
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />

            </View>
          </TouchableOpacity>

        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={2}
            onPress={() => handlePress(2)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Komputery
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(3)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Tablety
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(4)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Sprzęt AGD
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(5)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Podzespoły
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(6)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Gaming
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(7)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Smartfony i smartwatche
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(8)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Telewizory i audio
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(9)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Foto i kamery
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(10)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                AGD duże
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(11)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                AGD małe
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(12)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Dom i ogród
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(13)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Biuro i firma
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.typebox}>
          <TouchableOpacity
            key={1}
            onPress={() => handlePress(14)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, marginBottom: 10, marginLeft: 5, }}>
                Sport i turystyka
              </Text>
              <Feather name="chevron-right" size={30} style={{ marginBottom: 10 }} />
            </View>
          </TouchableOpacity>
        </View>



      </View>
    </ScrollView>
  );
};
export default Search;


const styles = StyleSheet.create({
  container: {
    flex: 0,
    //backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
    //margintop: 10,

  },
  box: {

    marginTop: 40,
    alignItems: 'center',
    position: 'relative',  // dodajemy styl pozycjonowania
  },
  typebox: {
    marginTop: 10,
    marginLeft: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginRight: 15,
    justifyContent: 'center',

  },

  buttonInput: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    //height: 50,
    width: '95%',
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#808080',
    backgroundColor: 'white',
    paddingRight: 50,  // dodajemy padding po prawej stronie  
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerContainer: {
    height: 40,
    width: 250,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  pickerItem: {
    justifyContent: 'flex-start',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 2,
  },
});