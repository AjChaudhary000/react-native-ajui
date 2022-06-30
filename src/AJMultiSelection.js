import { View, Text, Image, TouchableOpacity, StyleSheet ,StyleProp} from 'react-native'
import React from 'react'
const AJMultiSelection = ({ data = [{ name: "You Are Devloper", value: 'Devloper' },
{ name: "You Are Desinger ", value: 'Desinger' }],
borderColor='blue',
componentStyles={...StyleProp},
OnSelectValue,TextColor='white',backgroundColor='blue'
}) => {
    const [selectedValue, setSelectedValue] = React.useState([]);
    const multiSelectionHandle = (item) => {
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
    <View style={{flexWrap:'wrap',flexDirection:'row', marginHorizontal: 20,}}>
    {data?.map((item, index) => (
        <TouchableOpacity
            activeOpacity={0.60}
            key={index}
            onPress={() =>multiSelectionHandle(item)}
            style={styles.MultiSelection(borderColor,componentStyles,selectedValue.includes(item.value),backgroundColor)}>
                <Text style={{color:selectedValue.includes(item.value) ? TextColor : 'black'}}>
                    {item.name}
                </Text> 
        </TouchableOpacity>
    ))}
</View>
  )
}
export default AJMultiSelection
const styles = StyleSheet.create({
    MultiSelection: (borderColor,componentStyles,Type,backgroundColor) => [{
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