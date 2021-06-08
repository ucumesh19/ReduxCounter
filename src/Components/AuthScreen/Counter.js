import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, test } from '../../redux/counterAction';

const Counter = (props) => {
    //  const [count, setCount] = useState(0);
    //test Purpose only
    let obj = {
        name: "Umesh",
        email: "abc@g.com",
        num: 987656788
    }
    const data = useSelector((state) => state.counter);
    const uData = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: "row", borderRadius: 20, borderWidth: 2, width: '50%', justifyContent: "space-between", backgroundColor: "lightblue" }}>
                <TouchableOpacity onPress={() => { dispatch(increment(3)) }}>
                    <Text style={{ fontSize: 40 }}>+</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 40 }}>{data}</Text>

                <TouchableOpacity onPress={() => { dispatch(decrement(2)) }}>
                    <Text style={{ fontSize: 40 }}>-</Text>
                </TouchableOpacity>
            </View>
            {/* Practice purpose */}
            <View style={{ flexDirection: "row", justifyCotent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => { dispatch(test(obj)) }}>
                    <Text style={{ fontSize: 30 }}>touch</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>{uData?.name, uData.num}{uData?.email}</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Counter;
