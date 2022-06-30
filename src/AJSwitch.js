import { View, Text ,Animated,TouchableOpacity} from 'react-native'
import React from 'react'

const AJSwitch = () => {
    const [switchValue,setSwitchValue]= React.useState(false)
    const right = React.useRef(new Animated.Value(0))
    const switchHandler = ()=>{
        setSwitchValue(!switchValue)
        Animated.parallel([
            Animated.timing(right.current, {
              toValue:switchValue? 20 :0,
              duration:500,
              useNativeDriver: false,
            }),
          ]).start();
    }
  return (
    <View style={{margin:10}}>
    <TouchableOpacity activeOpacity={0.90}
     style={{width:50,height:30,borderWidth:2,borderRadius:15,justifyContent:'center'}} 
    onPress={switchHandler}>
    <Animated.View style={{width:25,height:25,borderRadius:14
        ,backgroundColor:'red',position:'absolute',left:right.current}}></Animated.View>
    </TouchableOpacity>
  </View>
  )
}

export default AJSwitch