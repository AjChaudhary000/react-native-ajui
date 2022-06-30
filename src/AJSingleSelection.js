import { View, Text, Image, TouchableOpacity, StyleSheet ,StyleProp} from 'react-native'
import React from 'react'
const AJSingleSelection = ({ data = [{ name: "You Are Devloper", value: 'Devloper' },
{ name: "You Are Desinger ", value: 'Desinger' }],
borderColor='blue',
componentStyles={...StyleProp},
OnSelectValue,TextColor='white',backgroundColor='blue'
}) => {
    const [selectedValue, setSelectedValue] = React.useState(data[0]?.value);
    const singleSelectionHandle = (item) => {
        setSelectedValue(item.value);
        OnSelectValue(selectedValue)
    }
  return (
    <View style={{flexWrap:'wrap',flexDirection:'row', marginHorizontal: 20,}}>
    {data?.map((item, index) => (
        <TouchableOpacity
            activeOpacity={0.60}
            key={index}
            onPress={() => singleSelectionHandle(item)}
            style={styles.SingleSelection(borderColor,componentStyles,item.value == selectedValue,backgroundColor)}>
                <Text style={{color:item.value == selectedValue ? TextColor : 'black'}}>
                    {item.name}
                </Text> 
        </TouchableOpacity>
    ))}
</View>
  )
}
export default AJSingleSelection
const styles = StyleSheet.create({
    SingleSelection: (borderColor,componentStyles,Type,backgroundColor) => [{
        minWidth:100,
        height:50,
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor:Type ? backgroundColor: 'white',
        borderColor: borderColor,
        paddingHorizontal:10,
        ...componentStyles
    }],
    Images: (color) => [{
        width: 50,
        height: 50,
        tintColor: color,
    }]
})