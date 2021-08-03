/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 02/08/2021 - 17:11:11
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 02/08/2021
 * - Author          :
 * - Modification    :
 **/
import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

import * as S from './styles';

export const ContentAnimed = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animetedContent();
  });

  const animetedContent = () => {
    Animated.timing(fadeAnim, {
      toValue: 250,
      duration: 30000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  return (
    <S.Container
      as={Animated.View}
      style={{
        height: fadeAnim.interpolate({
          inputRange: [0, 5],
          outputRange: ['0%', '100%'],
        }),
        flex: fadeAnim.interpolate({
          inputRange: [0, 5],
          outputRange: [0, 1],
        }),
      }}
    />
  );
};
