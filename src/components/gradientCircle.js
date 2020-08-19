import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientCircle = ({style}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#C01C8A', '#865CF4']}
        style={[
          {
            borderRadius: 50,
            display: 'flex',
            height: 7,
            alignItems: 'center',
            justifyContent: 'center',
            width: 7,
          },
          {...style},
        ]}
      />
    </>
  );
};

export default GradientCircle;
