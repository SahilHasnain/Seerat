import { colors } from "@/constants/theme";
import type { Channel, DurationOption, SortOption } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useEffect, useRef } from "react";
import { Modal, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    type SharedValue,
} from "react-native-reanimated";
import Pressable from "./ResponsivePressable";

interface AnimatedHeaderProps {
  translateY: SharedValue<number>;
  isScrolledDown: SharedValue<boolean>;
  // Filter props
  selectedSort: SortOption;
  selectedChannelId: string | null;
  selectedDuration: DurationOption;
  channels: Channel[];
  channelsLoading?: boolean;
  onChannelChange: (channelId: string | null) => void;
  onSearchPress: () => void;
  disableFilter?: boolean;
  // Search mode props
  isSearchActive?: boolean;
  searchInput?: string;
  onSearchInputChange?: (text: string) => void;
  onSearchSubmit?: () => void;
  onSearchClose?: () => void;
}

export function AnimatedHeader({
  translateY,
  isScrolledDown,
  selectedSort,
  selectedChannelId,
  selectedDuration,
  channels,
  channelsLoading = false,
  onChannelChange,
  onSearchPress,
  disableFilter = false,
  isSearchActive = false,
  searchInput = "",
  onSearchInputChange,
  onSearchSubmit,
  onSearchClose,
}: AnimatedHeaderProps) {
  const inputRef = useRef<TextInput>(null);
  const [showModeMenu, setShowModeMenu] = React.useState(false);

  // Auto-focus input when search mode activates
  useEffect(() => {
    if (isSearchActive) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const hasSelectedMode = selectedChannelId !== null;
  const sortedChannels = React.useMemo(
    () => [...channels].sort((a, b) => a.name.localeCompare(b.name)),
    [channels],
  );
  const modeOptions = React.useMemo(
    () => [
      { id: null, name: "All Modes" },
      ...sortedChannels.map((channel) => ({
        id: channel.id,
        name: channel.modeName || channel.name,
      })),
    ],
    [sortedChannels],
  );
  const currentMode =
    modeOptions.find((option) => option.id === selectedChannelId) ||
    modeOptions[0];

  return (
    <>
      <Modal
        visible={showModeMenu}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModeMenu(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowModeMenu(false)}>
          <View className="flex-1 bg-black/50">
            <TouchableWithoutFeedback>
              <View
                className="absolute right-4 overflow-hidden rounded-xl border"
                style={{
                  top: 72,
                  minWidth: 180,
                  backgroundColor: colors.background.secondary,
                  borderColor: colors.border.secondary,
                }}
              >
                {modeOptions.map((option, index) => {
                  const isSelected = selectedChannelId === option.id;
                  return (
                    <Pressable
                      key={option.id ?? "all"}
                      onPress={() => {
                        onChannelChange(option.id);
                        setShowModeMenu(false);
                      }}
                      disabled={channelsLoading}
                      className="px-4 py-3 flex-row items-center justify-between"
                      style={{
                        borderBottomWidth: index < modeOptions.length - 1 ? 1 : 0,
                        borderBottomColor: colors.border.secondary,
                        backgroundColor: isSelected
                          ? colors.accent.secondary
                          : "transparent",
                        opacity: channelsLoading ? 0.6 : 1,
                      }}
                    >
                      <Text
                        className="font-medium"
                        style={{
                          color: isSelected ? colors.text.primary : "#ffffff",
                        }}
                      >
                        {option.name}
                      </Text>
                      {isSelected && (
                        <Ionicons
                          name="checkmark"
                          size={18}
                          color={colors.text.primary}
                        />
                      )}
                    </Pressable>
                  );
                })}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Animated.View
        style={[animatedStyle]}
        className="absolute top-0 left-0 right-0 z-50"
      >
        <View
          className="px-4 pt-safe-top pb-3"
          style={{ backgroundColor: colors.background.primary }}
        >
        {isSearchActive ? (
          /* Search Mode */
          <View className="flex-row items-center mb-3">
            {/* Back Button */}
            <Pressable
              onPress={onSearchClose}
              className="mr-3 items-center justify-center rounded-full"
              accessibilityLabel="Close search"
              accessibilityRole="button"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{
                width: 36,
                height: 36,
                backgroundColor: colors.background.secondary,
              }}
            >
              <Ionicons
                name="chevron-back"
                size={20}
                color={colors.text.secondary}
              />
            </Pressable>

            {/* Search Input */}
            <View
              className="flex-1 flex-row items-center px-4 py-2.5 rounded-full border"
              style={{
                backgroundColor: colors.background.secondary,
                borderColor: colors.border.subtle,
              }}
            >
              <Ionicons
                name="search"
                size={18}
                color={colors.text.secondary}
                style={{ marginRight: 10 }}
              />
              <TextInput
                ref={inputRef}
                value={searchInput}
                onChangeText={onSearchInputChange}
                onSubmitEditing={onSearchSubmit}
                placeholder="Search naats..."
                placeholderTextColor={colors.text.secondary}
                className="flex-1 text-base"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
                style={{ paddingVertical: 0, color: colors.text.primary }}
              />
              {searchInput.length > 0 && (
                <Pressable
                  onPress={() => onSearchInputChange?.("")}
                  className="items-center justify-center rounded-full"
                  accessibilityLabel="Clear search"
                  accessibilityRole="button"
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                >
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={colors.text.secondary}
                  />
                </Pressable>
              )}
            </View>
          </View>
        ) : (
          /* Normal Mode */
          <View className="flex-row items-center justify-between mb-3">
            <View
              className="rounded-full overflow-hidden"
              style={{ width: 32, height: 32 }}
            >
              <Image
                source={require("@/assets/images/android-icon-foreground.png")}
                style={{ width: 32, height: 32 }}
                contentFit="cover"
              />
            </View>

            <View className="flex-1 flex-row items-center justify-end gap-3 ml-3">
              <Pressable
                onPress={onSearchPress}
                accessibilityLabel="Search"
                accessibilityRole="button"
              >
                <Ionicons
                  name="search"
                  size={24}
                  color={colors.text.primary}
                />
              </Pressable>

              <Pressable
                onPress={() => setShowModeMenu((prev) => !prev)}
                className="rounded-xl flex-row items-center px-3"
                style={{
                  minHeight: 38,
                  backgroundColor: hasSelectedMode
                    ? colors.accent.primary
                    : colors.background.secondary,
                  opacity: disableFilter ? 0.3 : 1,
                }}
                accessibilityLabel="Select mode"
                accessibilityRole="button"
                disabled={disableFilter}
              >
                <Text
                  className="text-sm font-semibold"
                  style={{
                    color: hasSelectedMode ? "#ffffff" : colors.text.primary,
                  }}
                >
                  {currentMode.name}
                </Text>
                <Ionicons
                  name={showModeMenu ? "chevron-up" : "chevron-down"}
                  size={18}
                  color={hasSelectedMode ? "#ffffff" : colors.text.primary}
                  style={{ marginLeft: 6 }}
                />
              </Pressable>
            </View>
          </View>
        )}
        </View>
      </Animated.View>
    </>
  );
}
