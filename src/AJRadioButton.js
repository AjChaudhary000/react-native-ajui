import { View, Text, Image, TouchableOpacity, StyleSheet ,StyleProp} from 'react-native'
import React from 'react'
import Images from '../Images'

const AJRadioButton = ({ data = [{ name: "You Are Devloper", value: 'Devloper' },
{ name: "You Are Desinger ", value: 'Desinger' }],
tintColor='blue',
borderColor='blue',
componentStyles={...StyleProp},
OnSelectValue
}) => {
    const [selectedValue, setSelectedValue] = React.useState(data[0]?.value);
    const radioButtonHandle = (item) => {
        setSelectedValue(item.value);
        OnSelectValue(selectedValue)
    }
    return (
        <View>
            {data?.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.60}
                    key={index}
                    onPress={() => radioButtonHandle(item)}
                    style={styles.RadioButton(borderColor,componentStyles)}>
                    <View style={{ width: '20%' }}>
                        <Image source={item.value == selectedValue ? Images.radioOn : Images.radioOff}
                            style={styles.Images(tintColor)} />
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

export default AJRadioButton;
const styles = StyleSheet.create({
    RadioButton: (borderColor,componentStyles) => [{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        borderColor: borderColor,
        ...componentStyles
    }],
    Images: (color) => [{
        width: 50,
        height: 50,
        tintColor: color
    }]
})