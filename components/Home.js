import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const contacts = [
  {
    id: '1',
    name: 'Cahya Bintang Nugraha',
    phone: '085793912715',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Cahya.jpg'),
  },
  {
    id: '2',
    name: 'Zeva Gananta Putra',
    phone: '085763534212',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Zeva.jpg'),
  },
  {
    id: '3',
    name: 'Rian Hidayatullah',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Rian.jpg'),
  },
  {
    id: '4',
    name: 'Gilang Mubharak',
    phone: '085764534256',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Gilang.jpg'),
  },
   {
    id: '5',
    name: 'Efrizal Prayoga',
    phone: '085475758796',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Efrizal.jpg'),
  },
   {
    id: '6',
    name: 'Rofi Darojat',
    phone: '085769674536',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Rofi.jpg'),
  },
     {
    id: '7',
    name: 'Fajar Hidayat',
    phone: '085723456235',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Fajar.jpg'),
  },
     {
    id: '8',
    name: 'Rafida Zahra',
    phone: '085754367892',
    description: 'Universitas Muhammadiyah Sukabumi',
    image: require('../assets/Rafida.jpg'),
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ContactDetail', { contact: item })
            }>
            <View style={styles.contactItem}>
              <Image source={item.image} style={styles.contactImage} />
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
