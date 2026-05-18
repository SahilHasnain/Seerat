import { colors } from "@/constants/theme";
import { useHeaderVisibility } from "@/contexts/HeaderVisibilityContext.animated";
import { useLiveRadioPlayer } from "@/contexts/LiveRadioContext";
import { useTabBarVisibility } from "@/contexts/TabBarVisibilityContext.animated";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SLEEP_TIMER_OPTIONS = [
  { minutes: 5, label: "5 min" },
  { minutes: 10, label: "10 min" },
  { minutes: 15, label: "15 min" },
  { minutes: 30, label: "30 min" },
  { minutes: 45, label: "45 min" },
  { minutes: 60, label: "1 hour" },
];

export default function LiveScreen() {
  const {
    isLoading,
    error,
    isPlaying,
    sleepTimerMinutes,
    sleepTimerRemaining,
    play,
    pause,
    refresh,
    setSleepTimer,
    cancelSleepTimer,
  } = useLiveRadioPlayer();

  const [showSleepTimerMenu, setShowSleepTimerMenu] = useState(false);

  const isBuffering = isLoading && !isPlaying;

  const { showTabBar } = useTabBarVisibility();
  const { showHeader } = useHeaderVisibility();

  // Force tab bar and header to show when this screen is focused
  useFocusEffect(
    useCallback(() => {
      // Show tab bar and header, reset scroll tracking state
      showTabBar();
      showHeader();
    }, [showTabBar, showHeader]),
  );

  // Load initial state
  useEffect(() => {
    refresh();
  }, [refresh]);

  /**
   * Handle play naat radio
   */
  const handlePlayLive = async () => {
    await play();
  };

  /**
   * Handle pause naat radio from live page
   */
  const handleStopLive = async () => {
    await pause(true); // Pass true to indicate pause from live page
  };

  const handleSleepTimerSelect = (minutes: number) => {
    setSleepTimer(minutes);
    setShowSleepTimerMenu(false);
  };

  const handleCancelSleepTimer = () => {
    cancelSleepTimer();
    setShowSleepTimerMenu(false);
  };

  const formatTimeRemaining = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Error state
  if (error) {
    return (
      <SafeAreaView
        className="items-center justify-center flex-1 px-6"
        style={{ backgroundColor: colors.background.primary }}
        edges={["top"]}
      >
        <Ionicons name="radio-outline" size={80} color={colors.text.disabled} />
        <Text
          className="mt-4 text-xl font-bold"
          style={{ color: colors.text.primary }}
        >
          Naat Radio Unavailable
        </Text>
        <Text className="mt-2 text-center text-neutral-400">{error}</Text>
        <TouchableOpacity
          onPress={refresh}
          className="px-6 py-3 mt-6 rounded-full"
          style={{ backgroundColor: colors.accent.error }}
        >
          <Text
            className="font-semibold"
            style={{ color: colors.text.primary }}
          >
            Try Again
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/gumbad.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Smooth gradient overlay */}
        <LinearGradient
          colors={[
            "rgba(15, 15, 15, 0.3)",
            "rgba(15, 15, 15, 0.55)",
            "rgba(15, 15, 15, 0.85)",
            colors.background.primary,
          ]}
          locations={[0, 0.35, 0.65, 0.9]}
          style={StyleSheet.absoluteFill}
        />

        {/* Sleep Timer Modal */}
        <Modal
          visible={showSleepTimerMenu}
          transparent
          animationType="fade"
          onRequestClose={() => setShowSleepTimerMenu(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowSleepTimerMenu(false)}>
            <View className="flex-1 bg-black/50">
              <TouchableWithoutFeedback>
                <View
                  className="absolute rounded-xl overflow-hidden shadow-lg"
                  style={{
                    top: 180,
                    left: 16,
                    backgroundColor: colors.background.secondary,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  {sleepTimerMinutes && (
                    <TouchableOpacity
                      onPress={handleCancelSleepTimer}
                      className="px-4 py-3 flex-row items-center justify-between"
                      style={{
                        minWidth: 140,
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                      }}
                    >
                      <Text className="font-medium text-red-400">Cancel Timer</Text>
                      <MaterialIcons name="close" size={18} color="#f87171" />
                    </TouchableOpacity>
                  )}
                  {SLEEP_TIMER_OPTIONS.map((option, index) => (
                    <TouchableOpacity
                      key={option.minutes}
                      onPress={() => handleSleepTimerSelect(option.minutes)}
                      className="px-4 py-3 flex-row items-center justify-between"
                      style={{
                        minWidth: 140,
                        borderBottomWidth:
                          index < SLEEP_TIMER_OPTIONS.length - 1 || sleepTimerMinutes
                            ? 1
                            : 0,
                        borderBottomColor: "rgba(255,255,255,0.1)",
                        backgroundColor:
                          sleepTimerMinutes === option.minutes
                            ? "rgba(239, 68, 68, 0.2)"
                            : "transparent",
                      }}
                    >
                      <Text
                        className="font-medium"
                        style={{
                          color:
                            sleepTimerMinutes === option.minutes
                              ? colors.accent.error
                              : colors.text.primary,
                        }}
                      >
                        {option.label}
                      </Text>
                      {sleepTimerMinutes === option.minutes && (
                        <MaterialIcons
                          name="check"
                          size={18}
                          color={colors.accent.error}
                        />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <SafeAreaView className="flex-1" edges={["top"]}>
          {/* Sleep Timer Button - Fixed at top right below header */}
          <View className="absolute left-4 z-10" style={{ top: 120 }}>
            <TouchableOpacity
              onPress={() => setShowSleepTimerMenu(!showSleepTimerMenu)}
              className="px-4 py-3 rounded-full flex-row items-center gap-2 shadow-lg"
              style={{
                backgroundColor: "rgba(38, 38, 38, 0.9)",
                borderWidth: sleepTimerMinutes ? 2 : 0,
                borderColor: sleepTimerMinutes
                  ? `${colors.accent.error}99`
                  : "transparent",
              }}
              accessibilityLabel="Sleep timer"
            >
              <MaterialIcons
                name="bedtime"
                size={20}
                color={sleepTimerMinutes ? colors.accent.error : "white"}
              />
              {sleepTimerRemaining !== null && (
                <Text
                  className="text-sm font-semibold min-w-[40px]"
                  style={{ color: colors.accent.error }}
                >
                  {formatTimeRemaining(sleepTimerRemaining)}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <ScrollView
            className="flex-1"
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
              marginBottom: 150,
            }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={refresh}
                tintColor={colors.accent.error}
                colors={[colors.accent.error]}
              />
            }
          >
            {/* Current Track */}
            <View className="px-4 mb-6">
              {/* Headphone Image and Play Button - Inline */}
              <View className="flex-row items-center mb-4">
                <View className="mr-3">
                  <Image
                    source={require("@/assets/images/headphone-v1.png")}
                    style={{ width: 120, height: 120 }}
                    resizeMode="contain"
                  />
                </View>

                <View className="items-center justify-center flex-1 -ml-3">
                  {/* Play/Pause Button */}
                  <TouchableOpacity
                    onPress={isPlaying ? handleStopLive : handlePlayLive}
                    disabled={isBuffering}
                    className="items-center justify-center"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 36,
                      backgroundColor: "transparent",
                    }}
                  >
                    {isBuffering ? (
                      <ActivityIndicator
                        size="small"
                        color={colors.text.primary}
                      />
                    ) : (
                      <Ionicons
                        name={isPlaying ? "pause" : "play"}
                        size={32}
                        color={colors.text.primary}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
