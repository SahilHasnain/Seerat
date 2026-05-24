const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.seerat.dev";
  }
  if (IS_PREVIEW) {
    return "com.seerat.preview";
  }
  return "com.seerat";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Seerat E Mustafa (Dev)";
  }
  if (IS_PREVIEW) {
    return "Seerat E Mustafa (Preview)";
  }
  return "Seerat E Mustafa";
};

export default {
  expo: {
    name: getAppName(),
    slug: "seerat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/android-icon-foreground.png",
    scheme: "seerat",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
      infoPlist: {
        UIBackgroundModes: ["audio"],
      },
      associatedDomains: ["applinks:seerat.appwrite.network"],
    },
    android: {
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#000000",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: getUniqueIdentifier(),
      permissions: [
        "FOREGROUND_SERVICE",
        "FOREGROUND_SERVICE_MEDIA_PLAYBACK",
        "WAKE_LOCK",
        "android.permission.WAKE_LOCK",
        "android.permission.MODIFY_AUDIO_SETTINGS",
      ],
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "seerat",
              host: "*",
            },
          ],
          category: ["BROWSABLE", "DEFAULT"],
        },
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "https",
              host: "seerat.appwrite.network",
              pathPrefix: "/naat",
            },
          ],
          category: ["BROWSABLE", "DEFAULT"],
        },
      ],
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
      bundler: "metro",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          resizeMode: "cover",
          backgroundColor: "#000000",
        }
      ],
      [
        "expo-speech-recognition",
        {
          microphonePermission:
            "Allow $(PRODUCT_NAME) to use the microphone for voice search.",
          speechRecognitionPermission:
            "Allow $(PRODUCT_NAME) to recognize speech for voice search.",
          androidSpeechServicePackages: [
            "com.google.android.googlequicksearchbox",
          ],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        "projectId": "7927aef1-e1c8-4991-acec-e63e89dfc4d0"
      },
    },
  },
};
