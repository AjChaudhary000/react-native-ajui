import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Images from '../Images'

const AJDropDown = ({ data = []
    , borderColor = 'black', Value = 'value', Title = "title", serach = "title" }) => {

    const [inputValue, setInputValue] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState({});
    const [flatListVisible, setFlatListVisible] = React.useState(false);
    const [filterList, setFilterList] = React.useState(data || [])
    const inputHandler = (val) => {
        setInputValue(val);
        setFlatListVisible(true)
        const list = data.filter(item => { return ((item[serach]).includes(val)) });
        setFilterList(list)
    }
    const selectedValueHandler = (item) => {
        selectedValue[Value] === item[Value] ? setSelectedValue({}) : setSelectedValue(item)
        setFlatListVisible(false)
    }
    return (

        <View style={styles.component(borderColor)} >
            <View style={styles.dropDownBox(flatListVisible, borderColor)}>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        onFocus={() => setFlatListVisible(true)}
                        onChangeText={inputHandler}
                        placeholder={"Select Option "}
                        value={flatListVisible ? inputValue : selectedValue[Title]}
                    /></View>
                <TouchableOpacity style={styles.imageBox} onPress={() => setFlatListVisible(!flatListVisible)}>
                    <Image source={flatListVisible ? Images.UpArrow : Images.DownArrow}
                        style={styles.image(borderColor)} />
                </TouchableOpacity>
            </View>
            {
                flatListVisible &&
                <View style={{
                    mxHeight: 300,
                    backgroundColor: '#fff',
                    width: '100%',
                    zIndex:1
                }}>
                    {filterList.length > 0 ?
                        <FlatList data={inputValue.length > 0 ? filterList : data} renderItem={(item) => (
                            <TouchableOpacity style={styles.flatListBox} onPress={() => selectedValueHandler(item.item)}>
                                <View style={styles.itemValue}>
                                    <Text>{item.item[Title]}</Text>
                                </View>
                                <View style={styles.listImage}>
                                    {selectedValue[Value] === item.item[Value] && <Image source={Images.dropDownCheck}
                                        style={styles.image(borderColor)} />}
                                </View>
                            </TouchableOpacity>
                        )} /> : <View style={styles.notDataFound}>
                            <Text>No data found</Text></View>}
                </View>

            }
        </View>

    )
}

export default AJDropDown;
const styles = StyleSheet.create({
    component: (borderColor) => [{
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: borderColor,
    }],
    dropDownBox: (flatListVisible, borderColor) => [{
        flexDirection: 'row',
        borderBottomWidth: flatListVisible ? 1 : 0, borderBottomColor: borderColor,

    }],
    inputBox: { width: '90%', height: 50 },
    input: {
        fontSize: 20,

    },
    imageBox: { width: '10%', justifyContent: 'center', height: 50 },
    image: (borderColor) => [{ width: 20, height: 20, tintColor: borderColor }],
    flatListBox: {
        height: 35,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    itemValue: { width: '90%', height: 35 },
    listImage: { width: '10%', justifyContent: 'center', height: 35 },
    notDataFound: { justifyContent: 'center', height: 50, alignItems: 'center' }
})