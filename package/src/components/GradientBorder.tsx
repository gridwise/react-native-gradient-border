import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export type GradientProps = Omit<
  LinearGradientProps,
  'style' | 'pointerEvents'
>;

export type RequiredGradientBorderProps = {
  /**
   * Props to be passed to the gradient component. See `react-native-linear-gradient` for full list. Requires "colors" prop.
   */
  gradientProps: GradientProps;
};

type BorderProps = Pick<ViewStyle,
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderLeftWidth'
  | 'borderBottomWidth'
  | 'borderRightWidth'
  | 'borderRadius'
  | 'borderTopRightRadius'
  | 'borderTopLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomLeftRadius'>

/**
 * A component that applies a gradient border to the parent.
 * Should be placed as the last child of the parent so that it isn't overlapped.
 * @example
 * ```tsx
 *      <View>
 *          <GradientBorder
 *              borderWidth={2}
 *              gradientProps={{
 *                  colors: ['red', 'blue']
 *              }}
 *          />
 *      </View>
 * ```
 */
export default function GradientBorder({
  gradientProps,
  borderWidth,
  borderRadius,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  borderBottomWidth,
}: RequiredGradientBorderProps & BorderProps) {
  return (
    <MaskedView
      maskElement={
        <View
          pointerEvents="none"
          style={[
            {
              borderWidth,
              borderRadius,
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomLeftRadius,
              borderBottomRightRadius,
              borderTopWidth,
              borderLeftWidth,
              borderRightWidth,
              borderBottomWidth,
            },
            StyleSheet.absoluteFill,
          ]}
          collapsable={false}
        />
      }
      style={[StyleSheet.absoluteFill]}
      pointerEvents="none">
      <LinearGradient
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
        {...gradientProps}
      />
    </MaskedView>
  );
}
