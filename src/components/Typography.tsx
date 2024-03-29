import React from "react";
import { Text } from "@chakra-ui/react";
import { TypographyColorTypes } from "../types/common";
import { colors } from "../common/colors";

interface ITypographyProps {
  children: React.ReactNode;
  uppercase?: boolean;
  color?: TypographyColorTypes;
  weight?: "bold" | "medium" | number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "6xl";
  lineHight?: number;
}

export const Typography = ({
  children,
  color = "black",
  size = "md",
  uppercase = false,
  weight = "medium",
  lineHight,
}: ITypographyProps) => {
  return (
    <Text
      color={colors[color]}
      fontSize={size}
      fontWeight={weight}
      textTransform={uppercase ? "uppercase" : "none"}
      lineHeight={lineHight || "none"}
    >
      {children}
    </Text>
  );
};
