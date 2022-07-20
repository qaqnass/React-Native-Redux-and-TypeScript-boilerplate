import React from "react";
import {
  Button,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { lang, RootState } from "../state";
import { HomeStyles } from '../styles/Home';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { l } = useSelector((state: RootState) => state);
  const {
    changeLanguage
  } = bindActionCreators(lang, dispatch);

  const handleOnPress = () => {
    changeLanguage('En')
  }

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Tech Group (TG)</Text>
      <Text style={HomeStyles.language}>{l.language}</Text>
      <Button
        title="Change Language"
        onPress={handleOnPress}
      />
    </View>
  );
};

export default HomeScreen;