import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';


//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    // let pw = ""
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text></Text>

            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label='Guest' value='guest'/>
                <Picker.Item label='Admin' value='admin'/>
            </Picker>

            {/* Ex1G: Create a TextInput labelled as "User Name". */}
            {/*<Text>Username:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>*/}
            <InputBox label="User Name:" onChangeText={name => setName(name)}></InputBox>

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
            {/*<Text>Password:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}/>*/}
            <InputBox label="Password:" onChangeText={value => setPw(value)}></InputBox>

            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/*<Button title="LOG IN" color="blue"></Button>*/}

            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Button onPress={() =>{Alert.alert("Welcome!")}} title="LOG IN" color="blue"></Button>

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw === correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
            }>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            {/* Ex1F: change Alert message to Toast message */}
            {/*<TouchableOpacity onPress={() =>{ToastAndroid.show(pw, ToastAndroid.SHORT)}}>*/}
            {/*    <Text>I'm pressable</Text>*/}
            {/*</TouchableOpacity>*/}

            <Text>Enter password: {pw}</Text>
        </View>
    );
};

export default MyApp;
