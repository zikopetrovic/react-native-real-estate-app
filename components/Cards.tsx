import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className="flex flex-col items-start w-60 h-80 relative"
      >
        <Image source={images.japan} className="size-full rounded-2xl" />
        <Image
          source={images.cardGradient}
          className="size-full rounded-2xl absolute bottom-0"
        />

        <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
          <Image source={icons.star} className="size-3.5" />
          <Text className="text-xs font-rubik-extrabold text-primary-300">
            4.4
          </Text>
        </View>

        <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
          <Text
            className="text-xl font-rubik-extrabold text-white"
            numberOfLines={1}
          >
            Modern Apartment
          </Text>
          <Text className="text-base font-rubik text-white">
            22 W 15th St, New York
          </Text>

          <View className="flex flex-row items-center justify-between w-full">
            <Text className="text-xl font-rubik-extrabold text-white">
              $2,500
            </Text>
            <Image source={icons.heart} className="size-5" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};
