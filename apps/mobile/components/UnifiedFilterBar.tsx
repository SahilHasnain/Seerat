import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import type { Channel, DurationOption, SortOption } from "@naat-collection/shared";
import React, { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import Pressable from "./ResponsivePressable";

interface UnifiedFilterBarProps {
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  channels: Channel[];
  selectedChannelId: string | null;
  onChannelChange: (channelId: string | null) => void;
  channelsLoading?: boolean;
  selectedDuration: DurationOption;
  onDurationChange: (duration: DurationOption) => void;
  pureOnly?: boolean;
  onPureOnlyChange?: (value: boolean) => void;
  externalOpen?: boolean;
  onExternalClose?: () => void;
  hideChips?: boolean;
}

const UnifiedFilterBar: React.FC<UnifiedFilterBarProps> = ({
  selectedSort,
  onSortChange,
  channels,
  selectedChannelId,
  onChannelChange,
  channelsLoading = false,
  selectedDuration,
  onDurationChange,
  pureOnly = false,
  onPureOnlyChange,
  externalOpen = false,
  onExternalClose,
  hideChips = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (externalOpen) {
      setIsDropdownOpen(true);
    }
  }, [externalOpen]);

  const closeDropdown = React.useCallback(() => {
    setIsDropdownOpen(false);
    onExternalClose?.();
  }, [onExternalClose]);

  const sortedChannels = useMemo(
    () => [...channels].sort((a, b) => a.name.localeCompare(b.name)),
    [channels],
  );

  const modeOptions = useMemo(
    () => [
      {
        id: null,
        name: "All Modes",
        iconName: "apps-outline" as keyof typeof Ionicons.glyphMap,
      },
      ...sortedChannels.map((channel) => ({
        id: channel.id,
        name: channel.name,
        iconName: (channel.isOther
          ? "folder-open-outline"
          : "radio-outline") as keyof typeof Ionicons.glyphMap,
      })),
    ],
    [sortedChannels],
  );

  const currentMode =
    modeOptions.find((option) => option.id === selectedChannelId) ||
    modeOptions[0];
  const hasSelectedMode = selectedChannelId !== null;

  if (hideChips && !isDropdownOpen) {
    return null;
  }

  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 4 }}>
      <View className="flex-row items-center">
        <Pressable
          onPress={() => setIsDropdownOpen((prev) => !prev)}
          className="flex-1 px-4 py-3 rounded-2xl flex-row items-center"
          style={{
            minHeight: 48,
            backgroundColor: isDropdownOpen || hasSelectedMode
              ? colors.accent.secondary
              : colors.background.tertiary,
          }}
          accessibilityRole="button"
          accessibilityLabel="Select mode"
        >
          <Ionicons
            name={currentMode.iconName}
            size={18}
            color={hasSelectedMode ? colors.text.primary : "#d4d4d8"}
          />
          <View className="ml-3 flex-1">
            <Text
              className="text-[11px] uppercase tracking-[1px]"
              style={{
                color: hasSelectedMode ? "rgba(255,255,255,0.75)" : "#8f95a3",
              }}
            >
              Mode
            </Text>
            <Text
              className="font-semibold text-sm"
              style={{
                color: hasSelectedMode ? colors.text.primary : "#d4d4d8",
              }}
            >
              {currentMode.name}
            </Text>
          </View>
          <Ionicons
            name={isDropdownOpen ? "chevron-up" : "chevron-down"}
            size={18}
            color={hasSelectedMode ? colors.text.primary : "#d4d4d8"}
          />
        </Pressable>

        {hasSelectedMode && (
          <Pressable
            onPress={() => {
              onChannelChange(null);
              closeDropdown();
            }}
            className="ml-3 px-4 py-3 rounded-2xl flex-row items-center"
            style={{
              minHeight: 48,
              backgroundColor: colors.background.secondary,
            }}
            accessibilityRole="button"
            accessibilityLabel="Clear selected mode"
          >
            <Ionicons name="close-circle" size={18} color="#d4d4d8" />
          </Pressable>
        )}
      </View>

      {isDropdownOpen && (
        <View
          className="mt-3 rounded-3xl overflow-hidden"
          style={{
            backgroundColor: colors.background.secondary,
            borderWidth: 1,
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
                  closeDropdown();
                }}
                disabled={channelsLoading}
                className="px-4 py-4 flex-row items-center"
                style={{
                  minHeight: 54,
                  backgroundColor: isSelected
                    ? colors.accent.secondary
                    : "transparent",
                  borderTopWidth: index === 0 ? 0 : 1,
                  borderTopColor: colors.border.secondary,
                  opacity: channelsLoading ? 0.6 : 1,
                }}
              >
                <Ionicons
                  name={option.iconName}
                  size={18}
                  color={isSelected ? colors.text.primary : "#cfd4dc"}
                />
                <Text
                  className="flex-1 ml-3 font-semibold text-sm"
                  style={{
                    color: isSelected ? colors.text.primary : "#e2e8f0",
                  }}
                >
                  {option.name}
                </Text>
                {isSelected && (
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color={colors.text.primary}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default UnifiedFilterBar;
