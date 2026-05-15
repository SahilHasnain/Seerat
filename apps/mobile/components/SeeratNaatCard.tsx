import { colors } from "@/constants/theme";
import { formatViews } from "@/utils";
import { formatRelativeTime } from "@/utils/dateGrouping";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import Pressable from "./ResponsivePressable";

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

interface SeeratNaatCardProps {
  title: string;
  thumbnail: string;
  duration: number;
  views: number;
  uploadDate: string;
  onPress: () => void;
  onLongPress?: () => void;
}

const SeeratNaatCard: React.FC<SeeratNaatCardProps> = React.memo(
  ({
    title,
    thumbnail,
    duration,
    views,
    uploadDate,
    onPress,
    onLongPress,
  }) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        delayLongPress={260}
        className="mb-4 flex-row items-start gap-3 rounded-xl"
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
          backgroundColor: colors.background.tertiary,
        })}
      >
        <View
          style={{
            width: 3,
            alignSelf: "stretch",
            backgroundColor: colors.accent.secondary,
            opacity: 0.9,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          }}
        />

        <View
          className="relative overflow-hidden rounded-md"
          style={{
            width: 140,
            height: 79,
            backgroundColor: colors.background.secondary,
          }}
        >
          {imageError || !thumbnail ? (
            <View
              className="items-center justify-center w-full h-full"
              style={{ backgroundColor: colors.background.secondary }}
            >
              <Ionicons name="musical-notes" size={28} color="#737373" />
            </View>
          ) : (
            <Image
              source={{ uri: thumbnail }}
              style={{ width: 140, height: 79 }}
              contentFit="cover"
              onError={() => setImageError(true)}
              cachePolicy="memory-disk"
              transition={200}
            />
          )}

          <View
            className="absolute bottom-1 right-1 rounded px-1.5 py-0.5"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            <Text
              className="text-[10px] font-semibold"
              style={{ color: colors.text.primary }}
            >
              {formatDuration(duration)}
            </Text>
          </View>
        </View>

        <View className="flex-1 justify-between py-2 pr-3">
          <Text
            className="mb-1.5 text-[15px] font-semibold leading-[20px]"
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{ color: colors.text.primary }}
          >
            {title}
          </Text>

          <View className="flex-row justify-end">
            <Text className="text-[11px]" style={{ color: colors.text.tertiary }}>
              {formatViews(views)} • {formatRelativeTime(uploadDate)}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
);

SeeratNaatCard.displayName = "SeeratNaatCard";

export default SeeratNaatCard;
