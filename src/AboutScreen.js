import {View,Text,} from 'react-native';



const AboutScreen=() =>{

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
      
          backgroundColor:'#8BC34A' }}>
        <Text style={{fontSize: '20px',  marginBottom:'2%', fontWeight:'bold' }}>ცხელი ხაზი </Text>
        <Text style={{fontSize: '20px', marginBottom: '5%' }}>(+995) 032 240 20 20 </Text>
        <Text style={{fontSize: '20px',marginBottom: '2%',fontWeight:'bold' }}>სამუშაო საათები</Text>
        <Text style={{fontSize: '20px', marginBottom: '5%' }}>ორშ - პარ 08:00 - 18:00 </Text>
        <Text style={{fontSize: '20px',marginBottom: '2%',fontWeight:'bold' }}>მისამართი</Text>
        <Text style={{fontSize: '20px', marginBottom:'5%' }}>დავით აღმაშენებლის გამზირი N148, თბილისი </Text>
        <Text style={{fontSize: '20px',marginBottom: '2%',fontWeight:'bold' }}>მიწოდების პირობები</Text>
        <Text style={{fontSize: '20px',marginBottom: '2%' }}>შეკვეთაზე რომლის ღირებულებაც აღემატება 100 ლარს მიწოდება უფასოა.</Text>
      </View>
    );
  }
  export default AboutScreen