import {StyleSheet, View} from 'react-native';
import MainPage from "./components/MainPage";
import Feed from "./components/Feed";
import Content from "./components/Content";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";

const App = () => {
    return (
        <View style={styles.container}>
            {/*<MainPage/> */}
            {/*<Feed/> */}
            {/*<Content/>*/}
            {/*<LoginPage/>*/}
            <SingUpPage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#bfbfbf",
    },
});

export default App;