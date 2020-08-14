import {CommonActions} from '@react-navigation/native';

let navigation;

export const setNavigator = (nav) => {
  navigation = nav;
};

export const navigate = ({name, params}) => {
  navigation.dispatch(
    CommonActions.reset({
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
};
// CommonActions.navigate
