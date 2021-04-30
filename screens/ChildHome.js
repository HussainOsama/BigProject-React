import { Text } from "react-native";
import * as React from "react";
import { Easing, TextInput, Animated, View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { observer } from "mobx-react";
import { AppView, ChildContainer, ChildTitle } from "../Styled/styled";
import { ImageBackground } from "react-native";
import { Block } from "galio-framework";
import FloatingButton from "../components/floatingButton/FloatingButton";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
function Donut({
  percentage = 100,
  radius = 180,
  strokeWidth = 20,
  duration = 500,
  color = "yellow",
  delay = 0,
  textColor,
  max = 100,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : percentage);
    });
  };

  React.useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)} KD`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage]
    );

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 3, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});

const ChildHome = () => {
  return (
    <>
      <Block flex style={styles.home}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/imgs/bg.png")}
        >
          <AppView>
            <View>
              <ChildTitle>Hello Khalid</ChildTitle>
            </View>
            <ChildContainer>
              <Donut />
            </ChildContainer>
          </AppView>
          <FloatingButton />
        </ImageBackground>
      </Block>
    </>
  );
};

export default ChildHome;
