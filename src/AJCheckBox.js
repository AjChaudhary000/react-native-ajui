import { View, Text, Image, TouchableOpacity, StyleSheet, StyleProp } from 'react-native'
import React from 'react'
import Images from '../Images'
const AJCheckBox = ({ data = [{ name: "You Are Devloper", value: 'Devloper' },
{ name: "You Are Desinger ", value: 'Desinger' }],
    tintColor = 'blue',
    borderColor = 'blue',
    componentStyles = { ...StyleProp },
    OnSelectValue
}) => {
    const [selectedValue, setSelectedValue] = React.useState([]);
    const checkBoxHandle = (item) => {
        const t = selectedValue?.indexOf(item.value)
        if (selectedValue.length === 0) {
            setSelectedValue([...selectedValue, item.value])
            OnSelectValue([...selectedValue, item.value])
        }
        else {
            if (t === -1) {
                setSelectedValue([...selectedValue, item.value])
                OnSelectValue([...selectedValue, item.value])
            } else {
               const data =  selectedValue.filter(i=>i!==item.value)
                setSelectedValue([...data])
                OnSelectValue([...data])
            }
        }
        
    }
   
    return (
        <View>
            {data?.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.60}
                    key={index}
                    onPress={() => checkBoxHandle(item)}
                    style={styles.checkBox(borderColor, componentStyles)}>
                    <View style={{ width: '20%' ,  justifyContent: 'center',alignItems:'center'}}>
                        <Image source={
                            !selectedValue.includes(item.value)
                                ? Images.checkTrue
                                : Images.checkFalse}
                            style={styles.Images(tintColor,selectedValue.includes(item.value))} />
                    </View>
                    <View style={{ width: '80%', justifyContent: 'center' }}>
                        <Text>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default AJCheckBox
const styles = StyleSheet.create({
    checkBox: (borderColor, componentStyles) => [{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        height:50,
        borderColor: borderColor,
        ...componentStyles
    }],
    Images: (color,checkStatus) => [{
      
        width:checkStatus?35: 40,
        height: checkStatus?35: 40,
        tintColor: color
    }]
})