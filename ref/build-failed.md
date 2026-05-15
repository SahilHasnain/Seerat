Running 'gradlew :app:assembleRelease' in /home/expo/workingdir/build/android
Downloading https://services.gradle.org/distributions/gradle-8.14.3-bin.zip
10%.
20%
30%.
40%.
50%.
60%
70%.
80%.
90%.
100%
Welcome to Gradle 8.14.3!
Here are the highlights of this release:
 - Java 24 support
- GraalVM Native Image toolchain selection
- Enhancements to test reporting
- Build Authoring improvements
For more details see https://docs.gradle.org/8.14.3/release-notes.html
To honour the JVM settings for this build a single-use Daemon process will be forked. For more on this, please refer to https://docs.gradle.org/8.14.3/userguide/gradle_daemon.html#sec:disabling_the_daemon in the Gradle documentation.
Daemon will be stopped at the end of the build
> Configure project :expo-gradle-plugin:expo-autolinking-plugin
w: file:///home/expo/workingdir/build/node_modules/expo-modules-autolinking/android/expo-gradle-plugin/expo-autolinking-plugin/build.gradle.kts:25:3: 'kotlinOptions(KotlinJvmOptionsDeprecated /* = KotlinJvmOptions */.() -> Unit): Unit' is deprecated. Please migrate to the compilerOptions DSL. More details are here: https://kotl.in/u1r8ln
> Configure project :expo-gradle-plugin:expo-autolinking-settings-plugin
w: file:///home/expo/workingdir/build/node_modules/expo-modules-autolinking/android/expo-gradle-plugin/expo-autolinking-settings-plugin/build.gradle.kts:30:3: 'kotlinOptions(KotlinJvmOptionsDeprecated /* = KotlinJvmOptions */.() -> Unit): Unit' is deprecated. Please migrate to the compilerOptions DSL. More details are here: https://kotl.in/u1r8ln
> Task :gradle-plugin:shared:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :gradle-plugin:settings-plugin:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :gradle-plugin:settings-plugin:pluginDescriptors
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:pluginDescriptors
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:processResources
> Task :gradle-plugin:settings-plugin:processResources
> Task :gradle-plugin:shared:processResources NO-SOURCE
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:processResources NO-SOURCE
> Task :gradle-plugin:shared:compileKotlin
> Task :gradle-plugin:shared:compileJava NO-SOURCE
> Task :gradle-plugin:shared:classes UP-TO-DATE
> Task :gradle-plugin:shared:jar
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:compileKotlin
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:compileJava
NO-SOURCE
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:classes UP-TO-DATE
> Task :expo-gradle-plugin:expo-autolinking-plugin-shared:jar
> Task :gradle-plugin:settings-plugin:compileKotlin
> Task :gradle-plugin:settings-plugin:compileJava
NO-SOURCE
> Task :gradle-plugin:settings-plugin:classes
> Task :gradle-plugin:settings-plugin:jar
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:compileKotlin
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:compileJava NO-SOURCE
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:classes
> Task :expo-gradle-plugin:expo-autolinking-settings-plugin:jar
> Configure project :expo-module-gradle-plugin
w: file:///home/expo/workingdir/build/node_modules/expo-modules-core/expo-module-gradle-plugin/build.gradle.kts:58:3: 'kotlinOptions(KotlinJvmOptionsDeprecated /* = KotlinJvmOptions */.() -> Unit): Unit' is deprecated. Please migrate to the compilerOptions DSL. More details are here: https://kotl.in/u1r8ln
> Task :gradle-plugin:react-native-gradle-plugin:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-gradle-plugin:expo-autolinking-plugin:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-module-gradle-plugin:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-module-gradle-plugin:pluginDescriptors
> Task :expo-module-gradle-plugin:processResources
> Task :expo-gradle-plugin:expo-autolinking-plugin:pluginDescriptors
> Task :expo-gradle-plugin:expo-autolinking-plugin:processResources
> Task :gradle-plugin:react-native-gradle-plugin:pluginDescriptors
> Task :gradle-plugin:react-native-gradle-plugin:processResources
> Task :expo-gradle-plugin:expo-autolinking-plugin:compileKotlin
> Task :expo-gradle-plugin:expo-autolinking-plugin:compileJava NO-SOURCE
> Task :expo-gradle-plugin:expo-autolinking-plugin:classes
> Task :expo-gradle-plugin:expo-autolinking-plugin:jar
> Task :gradle-plugin:react-native-gradle-plugin:compileKotlin
> Task :gradle-plugin:react-native-gradle-plugin:compileJava NO-SOURCE
> Task :gradle-plugin:react-native-gradle-plugin:classes
> Task :gradle-plugin:react-native-gradle-plugin:jar
> Task :expo-module-gradle-plugin:compileKotlin
w: file:///home/expo/workingdir/build/node_modules/expo-modules-core/expo-module-gradle-plugin/src/main/kotlin/expo/modules/plugin/android/AndroidLibraryExtension.kt:9:24 'var targetSdk: Int?' is deprecated. Will be removed from library DSL in v9.0. Use testOptions.targetSdk or/and lint.targetSdk instead.
> Task :expo-module-gradle-plugin:compileJava NO-SOURCE
> Task :expo-module-gradle-plugin:classes
> Task :expo-module-gradle-plugin:jar
> Configure project :
[32m[ExpoRootProject][0m Using the following versions:
  - buildTools:  [32m36.0.0[0m
  - minSdk:      [32m24[0m
  - compileSdk:  [32m36[0m
  - targetSdk:   [32m36[0m
  - ndk:         [32m27.1.12297006[0m
  - kotlin:      [32m2.1.20[0m
  - ksp:         [32m2.1.20-2.0.1[0m
> Configure project :expo
Using expo modules
  - [32mexpo-constants[0m (18.0.12)
- [32mexpo-modules-core[0m (3.0.29)
  - [33m[📦][0m [32mexpo-asset[0m (12.0.12)
  - [33m[📦][0m [32mexpo-file-system[0m (19.0.21)
  - [33m[📦][0m [32mexpo-font[0m (14.0.10)
  - [33m[📦][0m [32mexpo-haptics[0m (15.0.8)
  - [33m[📦][0m [32mexpo-image[0m (3.0.11)
- [33m[📦][0m [32mexpo-keep-awake[0m (15.0.8)
  - [33m[📦][0m [32mexpo-linking[0m (8.0.11)
  - [33m[📦][0m [32mexpo-screen-orientation[0m (9.0.8)
  - [33m[📦][0m [32mexpo-splash-screen[0m (31.0.13)
  - [33m[📦][0m [32mexpo-system-ui[0m (6.0.9)
  - [33m[📦][0m [32mexpo-web-browser[0m (15.0.10)
> Configure project :react-native-reanimated
Android gradle plugin: 8.11.0
Gradle: 8.14.3
Checking the license for package Android SDK Build-Tools 36 in /home/expo/Android/Sdk/licenses
License for package Android SDK Build-Tools 36 accepted.
Preparing "Install Android SDK Build-Tools 36 v.36.0.0".
"Install Android SDK Build-Tools 36 v.36.0.0" ready.
Installing Android SDK Build-Tools 36 in /home/expo/Android/Sdk/build-tools/36.0.0
"Install Android SDK Build-Tools 36 v.36.0.0" complete.
"Install Android SDK Build-Tools 36 v.36.0.0" finished.
[=========                              ] 25%
[=========                              ] 25% Fetch remote repository...        
[=======================================] 100% Fetch remote repository...
> Task :expo-modules-core:preBuild UP-TO-DATE
> Task :react-native-reanimated:assertMinimalReactNativeVersionTask SKIPPED
> Task :app:generateAutolinkingNewArchitectureFiles
> Task :app:generateAutolinkingPackageList
> Task :app:generateCodegenSchemaFromJavaScript SKIPPED
> Task :app:generateCodegenArtifactsFromSchema SKIPPED
> Task :app:generateReactNativeEntryPoint
> Task :expo-constants:createExpoConfig
> Task :expo-constants:preBuild
> Task :react-native-safe-area-context:generateCodegenSchemaFromJavaScript
The NODE_ENV environment variable is required but was not specified. Ensure the project is bundled with Expo CLI or NODE_ENV is set. Using only .env.local and .env
> Task :react-native-worklets:assertMinimalReactNativeVersionTask
> Task :react-native-worklets:assertNewArchitectureEnabledTask SKIPPED
> Task :react-native-gesture-handler:generateCodegenSchemaFromJavaScript
> Task :react-native-reanimated:generateCodegenSchemaFromJavaScript
> Task :react-native-async-storage_async-storage:generateCodegenSchemaFromJavaScript
> Task :react-native-webview:generateCodegenSchemaFromJavaScript
> Task :react-native-screens:generateCodegenSchemaFromJavaScript
> Task :react-native-worklets:generateCodegenSchemaFromJavaScript
> Task :react-native-safe-area-context:generateCodegenArtifactsFromSchema
> Task :react-native-safe-area-context:preBuild
> Task :expo-constants:preReleaseBuild
> Task :react-native-reanimated:generateCodegenArtifactsFromSchema
> Task :expo:generatePackagesList
> Task :expo:preBuild
> Task :expo:preReleaseBuild
> Task :react-native-reanimated:prepareReanimatedHeadersForPrefabs
> Task :react-native-gesture-handler:generateCodegenArtifactsFromSchema
> Task :react-native-gesture-handler:preBuild
> Task :expo-modules-core:preReleaseBuild UP-TO-DATE
> Task :react-native-reanimated:prepareWorkletsHeadersForPrefabs
> Task :react-native-reanimated:preBuild
> Task :react-native-reanimated:preReleaseBuild
> Task :react-native-webview:generateCodegenArtifactsFromSchema
> Task :react-native-webview:preBuild
> Task :react-native-gesture-handler:preReleaseBuild
> Task :react-native-async-storage_async-storage:generateCodegenArtifactsFromSchema
> Task :react-native-async-storage_async-storage:preBuild
> Task :react-native-async-storage_async-storage:preReleaseBuild
> Task :expo:mergeReleaseJniLibFolders
> Task :expo-constants:mergeReleaseJniLibFolders
> Task :react-native-gesture-handler:mergeReleaseJniLibFolders
> Task :react-native-safe-area-context:preReleaseBuild
> Task :react-native-async-storage_async-storage:mergeReleaseJniLibFolders
> Task :expo:mergeReleaseNativeLibs NO-SOURCE
> Task :react-native-async-storage_async-storage:mergeReleaseNativeLibs NO-SOURCE
> Task :expo-constants:mergeReleaseNativeLibs NO-SOURCE
> Task :react-native-safe-area-context:mergeReleaseJniLibFolders
> Task :react-native-screens:generateCodegenArtifactsFromSchema
> Task :react-native-screens:preBuild
> Task :react-native-safe-area-context:mergeReleaseNativeLibs
NO-SOURCE
> Task :react-native-screens:preReleaseBuild
> Task :react-native-safe-area-context:copyReleaseJniLibsProjectOnly
> Task :react-native-webview:preReleaseBuild
> Task :expo:copyReleaseJniLibsProjectOnly
> Task :react-native-async-storage_async-storage:copyReleaseJniLibsProjectOnly
> Task :react-native-safe-area-context:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :react-native-gesture-handler:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-constants:copyReleaseJniLibsProjectOnly
> Task :react-native-webview:mergeReleaseJniLibFolders
> Task :react-native-webview:mergeReleaseNativeLibs
NO-SOURCE
> Task :react-native-webview:copyReleaseJniLibsProjectOnly
> Task :react-native-webview:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :react-native-gesture-handler:generateReleaseBuildConfig
> Task :react-native-safe-area-context:generateReleaseBuildConfig
> Task :react-native-async-storage_async-storage:generateReleaseBuildConfig
> Task :react-native-webview:generateReleaseBuildConfig
> Task :react-native-gesture-handler:generateReleaseResValues
> Task :react-native-safe-area-context:generateReleaseResValues
> Task :react-native-async-storage_async-storage:generateReleaseResValues
> Task :react-native-webview:generateReleaseResValues
> Task :react-native-async-storage_async-storage:generateReleaseResources
> Task :react-native-webview:generateReleaseResources
> Task :react-native-safe-area-context:generateReleaseResources
> Task :react-native-gesture-handler:generateReleaseResources
> Task :react-native-safe-area-context:packageReleaseResources
> Task :react-native-async-storage_async-storage:packageReleaseResources
> Task :react-native-gesture-handler:packageReleaseResources
> Task :react-native-webview:packageReleaseResources
> Task :react-native-worklets:generateCodegenArtifactsFromSchema
> Task :react-native-worklets:prepareWorkletsHeadersForPrefabs
> Task :react-native-worklets:preBuild
> Task :app:preBuild
> Task :app:preReleaseBuild
> Task :react-native-worklets:preReleaseBuild
> Task :react-native-gesture-handler:parseReleaseLocalResources
> Task :react-native-safe-area-context:parseReleaseLocalResources
> Task :react-native-async-storage_async-storage:parseReleaseLocalResources
> Task :react-native-webview:parseReleaseLocalResources
> Task :app:mergeReleaseJniLibFolders
> Task :react-native-gesture-handler:javaPreCompileRelease
> Task :react-native-safe-area-context:javaPreCompileRelease
> Task :react-native-webview:javaPreCompileRelease
> Task :react-native-async-storage_async-storage:generateReleaseRFile
> Task :react-native-gesture-handler:generateReleaseRFile
> Task :react-native-webview:generateReleaseRFile
> Task :react-native-safe-area-context:generateReleaseRFile
> Task :expo:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo:generateReleaseBuildConfig
> Task :react-native-async-storage_async-storage:javaPreCompileRelease
> Task :expo:generateReleaseResValues
> Task :expo:generateReleaseResources
> Task :expo:packageReleaseResources
> Task :expo:parseReleaseLocalResources
> Task :expo:generateReleaseRFile
> Task :expo-constants:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :expo-constants:generateReleaseBuildConfig
> Task :expo-constants:generateReleaseResValues
> Task :expo-constants:generateReleaseResources
> Task :expo-constants:packageReleaseResources
> Task :expo-constants:parseReleaseLocalResources
> Task :expo-modules-core:configureCMakeRelWithDebInfo[arm64-v8a]
Checking the license for package CMake 3.22.1 in /home/expo/Android/Sdk/licenses
License for package CMake 3.22.1 accepted.
Preparing "Install CMake 3.22.1 v.3.22.1".
"Install CMake 3.22.1 v.3.22.1" ready.
Installing CMake 3.22.1 in /home/expo/Android/Sdk/cmake/3.22.1
"Install CMake 3.22.1 v.3.22.1" complete.
"Install CMake 3.22.1 v.3.22.1" finished.
> Task :expo-constants:generateReleaseRFile
> Task :expo-constants:javaPreCompileRelease
> Task :expo:javaPreCompileRelease
> Task :app:checkReleaseDuplicateClasses
> Task :app:buildKotlinToolingMetadata
> Task :app:checkKotlinGradlePluginConfigurationErrors SKIPPED
> Task :app:generateReleaseBuildConfig
> Task :expo:writeReleaseAarMetadata
> Task :expo-constants:writeReleaseAarMetadata
> Task :react-native-gesture-handler:writeReleaseAarMetadata
> Task :react-native-async-storage_async-storage:compileReleaseJavaWithJavac
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: /home/expo/workingdir/build/node_modules/@react-native-async-storage/async-storage/android/src/javaPackage/java/com/reactnativecommunity/asyncstorage/AsyncStoragePackage.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
> Task :react-native-safe-area-context:compileReleaseKotlin
w: file:///home/expo/workingdir/build/node_modules/react-native-safe-area-context/android/src/main/java/com/th3rdwave/safeareacontext/SafeAreaView.kt:59:23 'val uiImplementation: UIImplementation!' is deprecated. Deprecated in Java.
> Task :react-native-webview:compileReleaseKotlin
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:22:8 'object MapBuilder : Any' is deprecated. Use Kotlin's built-in collections extensions.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:82:18 'var allowFileAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:83:18 'var allowUniversalAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:124:21 'fun allowScanningByMediaScanner(): Unit' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:161:36 'var systemUiVisibility: Int' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:300:14 'object MapBuilder : Any' is deprecated. Use Kotlin's built-in collections extensions.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:350:34 Condition is always 'true'.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:369:38 'var allowUniversalAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:430:51 Unchecked cast of 'Any?' to 'HashMap<String, String>'.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:486:23 'var savePassword: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:487:23 'var saveFormData: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:557:23 'var allowFileAccessFromFileURLs: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:602:52 'static field FORCE_DARK_ON: Int' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:602:89 'static field FORCE_DARK_OFF: Int' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:603:35 'static fun setForceDark(p0: @NonNull() WebSettings, p1: Int): Unit' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:612:35 'static fun setForceDarkStrategy(p0: @NonNull() WebSettings, p1: Int): Unit' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:614:39 'static field DARK_STRATEGY_PREFER_WEB_THEME_OVER_USER_AGENT_DARKENING: Int' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:658:65 Unchecked cast of 'ArrayList<Any?>' to 'List<Map<String, String>>'.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt:679:23 'var saveFormData: Boolean' is deprecated. Deprecated in Java.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/SubResourceErrorEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/SubResourceErrorEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/SubResourceErrorEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/SubResourceErrorEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/SubResourceErrorEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopCustomMenuSelectionEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopHttpErrorEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingErrorEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingFinishEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingProgressEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopLoadingStartEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:10:75 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:21:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:21:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopMessageEvent.kt:22:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:11:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:22:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:22:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopNewWindowEvent.kt:23:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:12:3 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:23:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:23:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopRenderProcessGoneEvent.kt:24:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:5:8 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:10:89 'constructor<T : Event<T>>(viewTag: Int): Event<T>' is deprecated. Use constructor with explicit surfaceId instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:27:16 This declaration overrides a deprecated member but is not marked as deprecated itself. Add the '@Deprecated' annotation or suppress the diagnostic.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:27:42 'interface RCTEventEmitter : JavaScriptModule' is deprecated. Use [RCTModernEventEmitter] instead.
w: file:///home/expo/workingdir/build/node_modules/react-native-webview/android/src/main/java/com/reactnativecommunity/webview/events/TopShouldStartLoadWithRequestEvent.kt:28:21 'fun receiveEvent(targetTag: Int, eventName: String, params: WritableMap?): Unit' is deprecated. Use [RCTModernEventEmitter.receiveEvent] instead.
> Task :app:createBundleReleaseJsAndAssets
React Compiler enabled
Starting Metro Bundler
Android node_modules/expo-router/entry.js ▓▓▓▓▓░░░░░░░░░░░ 32.9% (342/596)
> Task :react-native-webview:compileReleaseJavaWithJavac
> Task :react-native-safe-area-context:compileReleaseJavaWithJavac
> Task :react-native-async-storage_async-storage:bundleLibRuntimeToDirRelease
> Task :react-native-safe-area-context:bundleLibRuntimeToDirRelease
> Task :react-native-webview:bundleLibRuntimeToDirRelease
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
> Task :app:createBundleReleaseJsAndAssets
Android Bundled 2527ms node_modules/expo-router/entry.js (1211 modules)
Writing bundle output to: /home/expo/workingdir/build/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle
Writing sourcemap output to: /home/expo/workingdir/build/android/app/build/intermediates/sourcemaps/react/release/index.android.bundle.packager.map
Copying 26 asset files
Done writing bundle output
Done writing sourcemap output
> Task :react-native-async-storage_async-storage:writeReleaseAarMetadata
> Task :react-native-safe-area-context:writeReleaseAarMetadata
> Task :react-native-webview:writeReleaseAarMetadata
> Task :expo:extractDeepLinksRelease
> Task :expo-constants:extractDeepLinksRelease
> Task :expo-constants:processReleaseManifest
> Task :expo:processReleaseManifest
> Task :react-native-gesture-handler:extractDeepLinksRelease
> Task :react-native-async-storage_async-storage:extractDeepLinksRelease
> Task :react-native-async-storage_async-storage:processReleaseManifest
package="com.reactnativecommunity.asyncstorage" found in source AndroidManifest.xml: /home/expo/workingdir/build/node_modules/@react-native-async-storage/async-storage/android/src/main/AndroidManifest.xml.
Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
Recommendation: remove package="com.reactnativecommunity.asyncstorage" from the source AndroidManifest.xml: /home/expo/workingdir/build/node_modules/@react-native-async-storage/async-storage/android/src/main/AndroidManifest.xml.
> Task :react-native-gesture-handler:processReleaseManifest
> Task :react-native-webview:extractDeepLinksRelease
> Task :react-native-safe-area-context:extractDeepLinksRelease
> Task :react-native-safe-area-context:processReleaseManifest
package="com.th3rdwave.safeareacontext" found in source AndroidManifest.xml: /home/expo/workingdir/build/node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml.
Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.
Recommendation: remove package="com.th3rdwave.safeareacontext" from the source AndroidManifest.xml: /home/expo/workingdir/build/node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml.
> Task :react-native-webview:processReleaseManifest
> Task :expo:compileReleaseLibraryResources
> Task :expo-constants:compileReleaseLibraryResources
> Task :react-native-async-storage_async-storage:compileReleaseLibraryResources
> Task :react-native-gesture-handler:compileReleaseLibraryResources
> Task :react-native-safe-area-context:compileReleaseLibraryResources
> Task :react-native-async-storage_async-storage:bundleLibCompileToJarRelease
> Task :react-native-safe-area-context:bundleLibCompileToJarRelease
> Task :expo:prepareReleaseArtProfile
> Task :expo-constants:prepareReleaseArtProfile
> Task :react-native-async-storage_async-storage:prepareReleaseArtProfile
> Task :react-native-gesture-handler:prepareReleaseArtProfile
> Task :react-native-webview:bundleLibCompileToJarRelease
> Task :react-native-webview:prepareReleaseArtProfile
> Task :react-native-safe-area-context:prepareReleaseArtProfile
> Task :react-native-safe-area-context:bundleLibRuntimeToJarRelease
> Task :react-native-webview:bundleLibRuntimeToJarRelease
> Task :react-native-webview:compileReleaseLibraryResources
> Task :react-native-async-storage_async-storage:bundleLibRuntimeToJarRelease
> Task :expo:mergeReleaseShaders
> Task :expo:compileReleaseShaders NO-SOURCE
> Task :expo:generateReleaseAssets UP-TO-DATE
> Task :expo:mergeReleaseAssets
> Task :expo-constants:mergeReleaseShaders
> Task :expo-constants:compileReleaseShaders NO-SOURCE
> Task :expo-constants:generateReleaseAssets UP-TO-DATE
> Task :expo-constants:mergeReleaseAssets
> Task :react-native-async-storage_async-storage:mergeReleaseShaders
> Task :react-native-async-storage_async-storage:compileReleaseShaders NO-SOURCE
> Task :react-native-async-storage_async-storage:generateReleaseAssets UP-TO-DATE
> Task :react-native-async-storage_async-storage:mergeReleaseAssets
> Task :react-native-gesture-handler:mergeReleaseShaders
> Task :react-native-gesture-handler:compileReleaseShaders NO-SOURCE
> Task :react-native-gesture-handler:generateReleaseAssets UP-TO-DATE
> Task :react-native-gesture-handler:mergeReleaseAssets
> Task :react-native-safe-area-context:mergeReleaseShaders
> Task :react-native-safe-area-context:compileReleaseShaders NO-SOURCE
> Task :react-native-safe-area-context:generateReleaseAssets UP-TO-DATE
> Task :react-native-safe-area-context:mergeReleaseAssets
> Task :react-native-webview:mergeReleaseShaders
> Task :react-native-webview:compileReleaseShaders NO-SOURCE
> Task :react-native-webview:generateReleaseAssets UP-TO-DATE
> Task :react-native-webview:mergeReleaseAssets
> Task :expo:extractProguardFiles
> Task :expo-constants:extractProguardFiles
> Task :expo-constants:prepareLintJarForPublish
> Task :expo:prepareLintJarForPublish
> Task :react-native-async-storage_async-storage:processReleaseJavaRes NO-SOURCE
> Task :react-native-async-storage_async-storage:createFullJarRelease
> Task :react-native-gesture-handler:extractProguardFiles
> Task :react-native-async-storage_async-storage:extractProguardFiles
> Task :react-native-gesture-handler:prepareLintJarForPublish
> Task :react-native-safe-area-context:processReleaseJavaRes
> Task :react-native-safe-area-context:createFullJarRelease
> Task :react-native-safe-area-context:extractProguardFiles
> Task :react-native-screens:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-worklets:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-reanimated:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-webview:processReleaseJavaRes
> Task :react-native-webview:createFullJarRelease
> Task :react-native-webview:extractProguardFiles
> Task :react-native-worklets:configureCMakeRelWithDebInfo[armeabi-v7a]
> Task :react-native-reanimated:configureCMakeRelWithDebInfo[armeabi-v7a]
> Task :react-native-reanimated:configureCMakeRelWithDebInfo[x86]
> Task :react-native-worklets:configureCMakeRelWithDebInfo[x86]
> Task :react-native-reanimated:configureCMakeRelWithDebInfo[x86_64]
> Task :react-native-reanimated:generateJsonModelRelease
> Task :react-native-reanimated:prefabReleaseConfigurePackage
> Task :react-native-worklets:configureCMakeRelWithDebInfo[x86_64]
> Task :react-native-worklets:generateJsonModelRelease
> Task :react-native-worklets:prefabReleaseConfigurePackage
> Task :react-native-safe-area-context:generateReleaseLintModel
> Task :react-native-webview:generateReleaseLintModel
> Task :react-native-async-storage_async-storage:generateReleaseLintModel
> Task :react-native-safe-area-context:prepareLintJarForPublish
> Task :react-native-async-storage_async-storage:prepareLintJarForPublish
> Task :react-native-safe-area-context:stripReleaseDebugSymbols NO-SOURCE
> Task :react-native-webview:prepareLintJarForPublish
> Task :react-native-safe-area-context:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-safe-area-context:extractDeepLinksForAarRelease
> Task :react-native-webview:stripReleaseDebugSymbols NO-SOURCE
> Task :react-native-webview:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-webview:extractDeepLinksForAarRelease
> Task :react-native-screens:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-screens:configureCMakeRelWithDebInfo[armeabi-v7a]
> Task :react-native-safe-area-context:extractReleaseAnnotations
> Task :react-native-safe-area-context:mergeReleaseGeneratedProguardFiles
> Task :react-native-webview:extractReleaseAnnotations
> Task :react-native-safe-area-context:mergeReleaseConsumerProguardFiles
> Task :react-native-webview:mergeReleaseGeneratedProguardFiles
> Task :react-native-webview:mergeReleaseConsumerProguardFiles
> Task :react-native-webview:mergeReleaseJavaResource
> Task :react-native-safe-area-context:mergeReleaseJavaResource
> Task :react-native-safe-area-context:syncReleaseLibJars
> Task :react-native-webview:syncReleaseLibJars
> Task :react-native-safe-area-context:bundleReleaseLocalLintAar
> Task :react-native-webview:bundleReleaseLocalLintAar
> Task :react-native-async-storage_async-storage:stripReleaseDebugSymbols NO-SOURCE
> Task :react-native-async-storage_async-storage:copyReleaseJniLibsProjectAndLocalJars
> Task :expo:stripReleaseDebugSymbols NO-SOURCE
> Task :react-native-async-storage_async-storage:extractDeepLinksForAarRelease
> Task :expo:copyReleaseJniLibsProjectAndLocalJars
> Task :expo:extractDeepLinksForAarRelease
> Task :expo-constants:stripReleaseDebugSymbols NO-SOURCE
> Task :expo-constants:copyReleaseJniLibsProjectAndLocalJars
> Task :react-native-async-storage_async-storage:extractReleaseAnnotations
> Task :expo-constants:extractDeepLinksForAarRelease
> Task :react-native-async-storage_async-storage:mergeReleaseGeneratedProguardFiles
> Task :expo-constants:writeReleaseLintModelMetadata
> Task :react-native-async-storage_async-storage:mergeReleaseConsumerProguardFiles
> Task :expo:writeReleaseLintModelMetadata
> Task :react-native-async-storage_async-storage:mergeReleaseJavaResource
> Task :react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets]
C/C++: ninja: Entering directory `/home/expo/workingdir/build/node_modules/react-native-reanimated/android/.cxx/RelWithDebInfo/3d31171d/arm64-v8a'
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
C/C++:    24 |       double mountTime) noexcept override;
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
C/C++:    27 |   virtual void shadowTreeDidMount(
C/C++:       |                ^
C/C++: 5 errors generated.
> Task :expo-modules-core:buildCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-screens:buildCMakeRelWithDebInfo[armeabi-v7a]
> Task :react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets]
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:12:23: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    12 |     const ShadowNode::Shared &shadowNode,
C/C++:       |                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:35:59: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    35 | void PropsRegistry::markNodeAsRemovable(const ShadowNode::Shared &shadowNode) {
C/C++:       |                                                           ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: 6 errors generated.
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: 4 errors generated.
> Task :react-native-worklets:buildCMakeRelWithDebInfo[arm64-v8a][worklets]
> Task :react-native-screens:configureCMakeRelWithDebInfo[x86]
> Task :react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets]
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp:45:13: error: 'Unshared' is deprecated: Use std::shared_ptr<ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    45 | ShadowNode::Unshared cloneShadowTreeWithNewPropsRecursive(
C/C++:       |             ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:42:20: note: 'Unshared' has been explicitly marked deprecated here
C/C++:    42 |   using Unshared [[deprecated("Use std::shared_ptr<ShadowNode> instead")]] =
C/C++:       |                    ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp:62:37: error: 'ListOfShared' is deprecated: Use std::vector<std::shared_ptr<const ShadowNode>> instead [-Werror,-Wdeprecated-declarations]
C/C++:    62 |        std::make_shared<ShadowNode::ListOfShared>(children),
C/C++:       |                                     ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:45:24: note: 'ListOfShared' has been explicitly marked deprecated here
C/C++:    45 |   using ListOfShared [[deprecated(
C/C++:       |                        ^
C/C++: 2 errors generated.
> Task :expo-modules-core:configureCMakeRelWithDebInfo[armeabi-v7a]
> Task :react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets]
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: 4 errors generated.
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:11:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
C/C++:    24 |       double mountTime) noexcept override;
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
C/C++:    27 |   virtual void shadowTreeDidMount(
C/C++:       |                ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:153:25: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   153 |       const ShadowNode::Shared &shadowNode);
C/C++:       |                         ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:230:37: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   230 |   std::vector<std::pair<ShadowNode::Shared, std::unique_ptr<jsi::Value>>>
C/C++:       |                                     ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:23: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   358 |     const ShadowNode::Shared &shadowNode) {
C/C++:       |                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:406:27: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
C/C++:   406 |   const auto shadowNode = shadowNodeFromValue(rnRuntime, shadowNodeWrapper);
C/C++:       |                           ^~~~~~~~~~~~~~~~~~~
C/C++:       |                           shadowNodeListFromValue
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
C/C++:    54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
C/C++:       |                                                ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:416:37: error: no viable conversion from 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
C/C++:   416 |             uiRuntime, propNameStr, shadowNode);
C/C++:       |                                     ^~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
C/C++:   427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
C/C++:       |                                           ^          ~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
C/C++:   562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
C/C++:   573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
C/C++:   439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
C/C++:       |                                  ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
C/C++:   585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:31: note: passing argument to parameter 'shadowNode' here
C/C++:   358 |     const ShadowNode::Shared &shadowNode) {
C/C++:       |                               ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:603:21: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
C/C++:   603 |   auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
C/C++:       |                     ^~~~~~~~~~~~~~~~~~~
C/C++:       |                     shadowNodeListFromValue
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
C/C++:    54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
C/C++:       |                                                ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:604:39: error: no viable conversion from 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
C/C++:   604 |   propsRegistry_->markNodeAsRemovable(shadowNode);
C/C++:       |                                       ^~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
C/C++:   427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
C/C++:       |                                           ^          ~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
C/C++:   562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
C/C++:   573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
C/C++:   439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
C/C++:       |                                  ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
C/C++:   585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:54: note: passing argument to parameter 'shadowNode' here
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                                      ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:695:23: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
C/C++:   695 |     auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
C/C++:       |                       ^~~~~~~~~~~~~~~~~~~
C/C++:       |                       shadowNodeListFromValue
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
C/C++:    54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
C/C++:       |                                                ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:1:
C/C++: In file included from /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include/jsi/jsi.h:13:
C/C++: In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/functional:526:
C/C++: In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__functional/boyer_moore_searcher.h:22:
C/C++: In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:24:
C/C++: In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/allocation_guard.h:15:
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/allocator_traits.h:305:5: error: no matching function for call to '__construct_at'
C/C++:   305 |     std::__construct_at(__p, std::forward<_Args>(__args)...);
C/C++:       |     ^~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/vector:902:21: note: in instantiation of function template specialization 'std::allocator_traits<std::allocator<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>>::construct<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>, std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>, void, void>' requested here
C/C++:   902 |     __alloc_traits::construct(this->__alloc(), std::__to_address(__tx.__pos_), std::forward<_Args>(__args)...);
C/C++:       |                     ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/vector:1508:5: note: in instantiation of function template specialization 'std::vector<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>::__construct_one_at_end<std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>' requested here
C/C++:  1508 |     __construct_one_at_end(std::forward<_Args>(__args)...);
C/C++:       |     ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:697:24: note: in instantiation of function template specialization 'std::vector<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>::emplace_back<std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>' requested here
C/C++:   697 |     operationsInBatch_.emplace_back(
C/C++:       |                        ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/construct_at.h:47:46: note: candidate template ignored: substitution failure [with _Tp = std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>, _Args = <std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>]: no matching constructor for initialization of 'std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>'
C/C++:    46 | template <class _Tp, class... _Args, class = decltype(::new(std::declval<void*>()) _Tp(std::declval<_Args>()...))>
C/C++:       |                                                                                    ~~~
C/C++:    47 | _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR _Tp* __construct_at(_Tp* __location, _Args&&... __args) {
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:15: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
C/C++:       |               ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:35: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
C/C++:   812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
C/C++:       |                                   ^~~~~~~~~~~~~~~~~~~
C/C++:       |                                   shadowNodeListFromValue
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
C/C++:    54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
C/C++:       |                                                ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:22: error: no viable conversion from 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'shared_ptr<const ShadowNode>'
C/C++:   812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
C/C++:       |                      ^            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
C/C++:   427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
C/C++:       |                                           ^          ~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
C/C++:   562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
C/C++:   573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
C/C++:   439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
C/C++:       |                                  ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
C/C++:   585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:836:27: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
C/C++:   836 |   const auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
C/C++:       |                           ^~~~~~~~~~~~~~~~~~~
C/C++:       |                           shadowNodeListFromValue
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
C/C++:    54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
C/C++:       |                                                ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:838:56: error: no viable conversion from 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
C/C++:   838 |       obtainPropFromShadowNode(uiRuntime, propNameStr, shadowNode);
C/C++:       |                                                        ^~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
C/C++:   427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
C/C++:       |                                           ^          ~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
C/C++:   562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
C/C++:   573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^          ~~~~~~~~~~~~~~~~
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
C/C++:   579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
C/C++:   625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
C/C++:       |                         ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
C/C++:   439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
C/C++:       |                                  ^
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
C/C++:   585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:31: note: passing argument to parameter 'shadowNode' here
C/C++:   358 |     const ShadowNode::Shared &shadowNode) {
C/C++:       |                               ^
C/C++: fatal error: too many errors emitted, stopping now [-ferror-limit=]
C/C++: 20 errors generated.
C/C++: /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
C/C++:       |                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
C/C++:       |                                              ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
C/C++:       |                                                 ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:    58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
C/C++:       |                                       ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:11:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
C/C++:    24 |       double mountTime) noexcept override;
C/C++:       |                                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
C/C++:    27 |   virtual void shadowTreeDidMount(
C/C++:       |                ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:153:25: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   153 |       const ShadowNode::Shared &shadowNode);
C/C++:       |                         ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:230:37: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
C/C++:   230 |   std::vector<std::pair<ShadowNode::Shared, std::unique_ptr<jsi::Value>>>
C/C++:       |                                     ^
C/C++: /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
C/C++:    36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
C/C++:       |                  ^
C/C++: /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:75:41: error: no member named 'rawProps' in 'facebook::react::Props'
C/C++:    75 |       layoutAnimation.finalView->props->rawProps, (folly::dynamic)*rawProps));
C/C++:       |       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
C/C++: 8 errors generated.
> Task :react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets] FAILED
> Task :react-native-gesture-handler:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-screens:buildCMakeRelWithDebInfo[x86]
> Task :app:configureCMakeRelWithDebInfo[arm64-v8a]
> Task :react-native-async-storage_async-storage:lintVitalAnalyzeRelease
> Task :react-native-safe-area-context:lintVitalAnalyzeRelease
> Task :expo-modules-core:buildCMakeRelWithDebInfo[armeabi-v7a]
[Incubating] Problems report is available at: file:///home/expo/workingdir/build/android/build/reports/problems/problems-report.html
FAILURE: Build failed with an exception.
* What went wrong:
Execution failed for task ':react-native-reanimated:buildCMakeRelWithDebInfo[arm64-v8a][reanimated,worklets]'.
> com.android.ide.common.process.ProcessException: ninja: Entering directory `/home/expo/workingdir/build/node_modules/react-native-reanimated/android/.cxx/RelWithDebInfo/3d31171d/arm64-v8a'
  [0/2] Re-checking globbed directories...
  [1/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Registries/WorkletRuntimeRegistry.cpp.o
  [2/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/JSLogger.cpp.o
  [3/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/JSScheduler.cpp.o
  [4/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/ReanimatedJSIUtils.cpp.o
  [5/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/AsyncQueue.cpp.o
  [6/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/NativeModules/WorkletsModuleProxySpec.cpp.o
  [7/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/JSISerializer.cpp.o
  [8/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Registries/EventHandlerRegistry.cpp.o
  [9/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/ReanimatedVersion.cpp.o
  [10/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/UIScheduler.cpp.o
  [11/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/SharedItems/Shareables.cpp.o
  [12/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/Tools/WorkletEventHandler.cpp.o
  [13/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/WorkletRuntime/RNRuntimeWorkletDecorator.cpp.o
  [14/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/WorkletRuntime/ReanimatedRuntime.cpp.o
  [15/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/android/PlatformLogger.cpp.o
  [16/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/WorkletRuntime/ReanimatedHermesRuntime.cpp.o
  [17/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/NativeModules/WorkletsModuleProxy.cpp.o
  [18/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/WorkletRuntime/WorkletRuntimeDecorator.cpp.o
  [19/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/worklets/WorkletRuntime/WorkletRuntime.cpp.o
  [20/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/AnimatedSensor/AnimatedSensorModule.cpp.o
  [21/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/android/AndroidUIScheduler.cpp.o
  [22/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedMountHook.cpp:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
     24 |       double mountTime) noexcept override;
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
     27 |   virtual void shadowTreeDidMount(
        |                ^
  5 errors generated.
  [23/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:12:23: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     12 |     const ShadowNode::Shared &shadowNode,
        |                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/PropsRegistry.cpp:35:59: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     35 | void PropsRegistry::markNodeAsRemovable(const ShadowNode::Shared &shadowNode) {
        |                                                           ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  6 errors generated.
  [24/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ReanimatedCommitHook.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedCommitHook.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
|                  ^
  4 errors generated.
  [25/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/android/WorkletsOnLoad.cpp.o
  [26/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsManager.cpp.o
  [27/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp:45:13: error: 'Unshared' is deprecated: Use std::shared_ptr<ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     45 | ShadowNode::Unshared cloneShadowTreeWithNewPropsRecursive(
        |             ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:42:20: note: 'Unshared' has been explicitly marked deprecated here
     42 |   using Unshared [[deprecated("Use std::shared_ptr<ShadowNode> instead")]] =
        |                    ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/Fabric/ShadowTreeCloner.cpp:62:37: error: 'ListOfShared' is deprecated: Use std::vector<std::shared_ptr<const ShadowNode>> instead [-Werror,-Wdeprecated-declarations]
     62 |        std::make_shared<ShadowNode::ListOfShared>(children),
        |                                     ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:45:24: note: 'ListOfShared' has been explicitly marked deprecated here
     45 |   using ListOfShared [[deprecated(
        |                        ^
  2 errors generated.
  [28/41] Building CXX object src/main/cpp/worklets/CMakeFiles/worklets.dir/android/WorkletsModule.cpp.o
  [29/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsUtils.h:3:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  4 errors generated.
  [30/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:9:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:11:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
     24 |       double mountTime) noexcept override;
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
     27 |   virtual void shadowTreeDidMount(
        |                ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:153:25: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    153 |       const ShadowNode::Shared &shadowNode);
        |                         ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:2:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:230:37: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    230 |   std::vector<std::pair<ShadowNode::Shared, std::unique_ptr<jsi::Value>>>
        |                                     ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:23: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    358 |     const ShadowNode::Shared &shadowNode) {
        |                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:406:27: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
    406 |   const auto shadowNode = shadowNodeFromValue(rnRuntime, shadowNodeWrapper);
        |                           ^~~~~~~~~~~~~~~~~~~
        |                           shadowNodeListFromValue
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
     54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
|                                                ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:416:37: error: no viable conversion from 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
    416 |             uiRuntime, propNameStr, shadowNode);
        |                                     ^~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
    427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
        |                                           ^          ~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
    562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
    573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
    439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
        |                                  ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
    585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:31: note: passing argument to parameter 'shadowNode' here
    358 |     const ShadowNode::Shared &shadowNode) {
        |                               ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:603:21: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
    603 |   auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
        |                     ^~~~~~~~~~~~~~~~~~~
        |                     shadowNodeListFromValue
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
     54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
        |                                                ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:604:39: error: no viable conversion from 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
    604 |   propsRegistry_->markNodeAsRemovable(shadowNode);
        |                                       ^~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
    427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
        |                                           ^          ~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
    562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
    573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
    439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
        |                                  ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
    585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:54: note: passing argument to parameter 'shadowNode' here
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                                      ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:695:23: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
    695 |     auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
        |                       ^~~~~~~~~~~~~~~~~~~
        |                       shadowNodeListFromValue
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
     54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
        |                                                ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:1:
  In file included from /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include/jsi/jsi.h:13:
  In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/functional:526:
  In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__functional/boyer_moore_searcher.h:22:
  In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:24:
  In file included from /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/allocation_guard.h:15:
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/allocator_traits.h:305:5: error: no matching function for call to '__construct_at'
    305 |     std::__construct_at(__p, std::forward<_Args>(__args)...);
        |     ^~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/vector:902:21: note: in instantiation of function template specialization 'std::allocator_traits<std::allocator<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>>::construct<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>, std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>, void, void>' requested here
    902 |     __alloc_traits::construct(this->__alloc(), std::__to_address(__tx.__pos_), std::forward<_Args>(__args)...);
        |                     ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/vector:1508:5: note: in instantiation of function template specialization 'std::vector<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>::__construct_one_at_end<std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>' requested here
   1508 |     __construct_one_at_end(std::forward<_Args>(__args)...);
        |     ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:697:24: note: in instantiation of function template specialization 'std::vector<std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>>::emplace_back<std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>' requested here
    697 |     operationsInBatch_.emplace_back(
        |                        ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/construct_at.h:47:46: note: candidate template ignored: substitution failure [with _Tp = std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>, _Args = <std::shared_ptr<std::vector<std::shared_ptr<const facebook::react::ShadowNode>>> &, std::unique_ptr<facebook::jsi::Value>>]: no matching constructor for initialization of 'std::pair<std::shared_ptr<const facebook::react::ShadowNode>, std::unique_ptr<facebook::jsi::Value>>'
     46 | template <class _Tp, class... _Args, class = decltype(::new(std::declval<void*>()) _Tp(std::declval<_Args>()...))>
        |                                                                                    ~~~
     47 | _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR _Tp* __construct_at(_Tp* __location, _Args&&... __args) {
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:15: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
        |               ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:35: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
    812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
        |                                   ^~~~~~~~~~~~~~~~~~~
        |                                   shadowNodeListFromValue
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
     54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
        |                                                ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:812:22: error: no viable conversion from 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'shared_ptr<const ShadowNode>'
    812 |   ShadowNode::Shared shadowNode = shadowNodeFromValue(rt, shadowNodeValue);
        |                      ^            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
    427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
        |                                           ^          ~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
    562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'ShadowNode::UnsharedListOfShared' (aka 'shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
    573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
    439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
        |                                  ^
/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
    585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:836:27: error: use of undeclared identifier 'shadowNodeFromValue'; did you mean 'shadowNodeListFromValue'?
    836 |   const auto shadowNode = shadowNodeFromValue(rt, shadowNodeWrapper);
        |                           ^~~~~~~~~~~~~~~~~~~
        |                           shadowNodeListFromValue
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/primitives.h:54:48: note: 'shadowNodeListFromValue' declared here
     54 | inline static ShadowNode::UnsharedListOfShared shadowNodeListFromValue(
        |                                                ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:838:56: error: no viable conversion from 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>' to 'const shared_ptr<const ShadowNode>'
    838 |       obtainPropFromShadowNode(uiRuntime, propNameStr, shadowNode);
        |                                                        ^~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:427:43: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'nullptr_t' (aka 'std::nullptr_t') for 1st argument
    427 |   _LIBCPP_HIDE_FROM_ABI _LIBCPP_CONSTEXPR shared_ptr(nullptr_t) _NOEXCEPT : __ptr_(nullptr), __cntrl_(nullptr) {}
        |                                           ^          ~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:562:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'const shared_ptr<const ShadowNode> &' for 1st argument
    562 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:573:25: note: candidate constructor not viable: no known conversion from 'const ShadowNode::UnsharedListOfShared' (aka 'const shared_ptr<std::vector<std::shared_ptr<const ShadowNode>>>') to 'shared_ptr<const ShadowNode> &&' for 1st argument
    573 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^          ~~~~~~~~~~~~~~~~
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:568:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    568 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(const shared_ptr<_Yp>& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:579:25: note: candidate template ignored: requirement '__compatible_with<std::vector<std::shared_ptr<const facebook::react::ShadowNode>, std::allocator<std::shared_ptr<const facebook::react::ShadowNode>>>, const facebook::react::ShadowNode>::value' was not satisfied [with _Yp = std::vector<std::shared_ptr<const facebook::react::ShadowNode>>]
    579 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(shared_ptr<_Yp>&& __r) _NOEXCEPT : __ptr_(__r.__ptr_), __cntrl_(__r.__cntrl_) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:605:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    605 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:625:25: note: candidate template ignored: could not match 'unique_ptr' against 'shared_ptr'
    625 |   _LIBCPP_HIDE_FROM_ABI shared_ptr(unique_ptr<_Yp, _Dp>&& __r) : __ptr_(__r.get()) {
        |                         ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:439:34: note: explicit constructor is not a candidate
    439 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(_Yp* __p) : __ptr_(__p) {
        |                                  ^
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/include/c++/v1/__memory/shared_ptr.h:585:34: note: explicit constructor is not a candidate
    585 |   _LIBCPP_HIDE_FROM_ABI explicit shared_ptr(const weak_ptr<_Yp>& __r)
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.cpp:358:31: note: passing argument to parameter 'shadowNode' here
    358 |     const ShadowNode::Shared &shadowNode) {
        |                               ^
  fatal error: too many errors emitted, stopping now [-ferror-limit=]
  20 errors generated.
  [31/41] Building CXX object src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o
  FAILED: src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o 
  /home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/bin/clang++ --target=aarch64-none-linux-android24 --sysroot=/home/expo/Android/Sdk/ndk/27.1.12297006/toolchains/llvm/prebuilt/linux-x86_64/sysroot -Dreanimated_EXPORTS -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp -I/home/expo/workingdir/build/node_modules/react-native-reanimated/android/src/main/cpp -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon -I/home/expo/workingdir/build/node_modules/react-native/ReactAndroid/src/main/jni/react/turbomodule -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/callinvoker -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/runtimeexecutor -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/yoga -I/home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/graphics/platform/cxx -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/jsi/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/e2ac816cc322e0622c8e36eeb217f096/transformed/fbjni-0.7.0/prefab/modules/fbjni/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/8dd563c36fdc8ed25724b885e60d3aa7/transformed/react-android-0.81.5-release/prefab/modules/reactnative/include -isystem /home/expo/.gradle/caches/8.14.3/transforms/5c678b73e2f69303c6df5ba1020627c5/transformed/hermes-android-0.81.5-release/prefab/modules/libhermes/include -g -DANDROID -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D__BIONIC_NO_PAGE_SIZE_MACRO -D_FORTIFY_SOURCE=2 -Wformat -Werror=format-security   -DREACT_NATIVE_MINOR_VERSION=81   -DREANIMATED_VERSION=3.17.5    -DHERMES_ENABLE_DEBUGGER=0 -fexceptions -fno-omit-frame-pointer -frtti -fstack-protector-all   -std=c++20 -Wall -Werror -DRCT_NEW_ARCH_ENABLED -DNDEBUG -DJS_RUNTIME_HERMES=1 -O2 -g -DNDEBUG -fPIC -DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_CFG_NO_COROUTINES=1 -DFOLLY_MOBILE=1 -DFOLLY_HAVE_RECVMMSG=1 -DFOLLY_HAVE_PTHREAD=1 -DFOLLY_HAVE_XSI_STRERROR_R=1 -std=gnu++20 -MD -MT src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o -MF src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o.d -o src/main/cpp/reanimated/CMakeFiles/reanimated.dir/home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp.o -c /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:20:33: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     20 |   void update(const ShadowNode::Shared &shadowNode, folly::dynamic &&props);
        |                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:52:46: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     52 |   void markNodeAsRemovable(const ShadowNode::Shared &shadowNode);
        |                                              ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:57:49: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     57 |   std::unordered_map<Tag, std::pair<ShadowNode::Shared, folly::dynamic>> map_;
        |                                                 ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:3:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.h:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/PropsRegistry.h:58:39: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
     58 |   std::unordered_map<Tag, ShadowNode::Shared> removableShadowNodes_;
        |                                       ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:11:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/Fabric/ReanimatedMountHook.h:24:34: error: non-virtual member function marked 'override' hides virtual member function
     24 |       double mountTime) noexcept override;
        |                                  ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/uimanager/UIManagerMountHook.h:27:16: note: hidden overloaded virtual function 'facebook::react::UIManagerMountHook::shadowTreeDidMount' declared here: type mismatch at 2nd parameter ('HighResTimeStamp' vs 'double')
     27 |   virtual void shadowTreeDidMount(
        |                ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:153:25: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    153 |       const ShadowNode::Shared &shadowNode);
        |                         ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  In file included from /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:4:
  /home/expo/workingdir/build/node_modules/react-native-reanimated/android/../Common/cpp/reanimated/NativeModules/ReanimatedModuleProxy.h:230:37: error: 'Shared' is deprecated: Use std::shared_ptr<const ShadowNode> instead [-Werror,-Wdeprecated-declarations]
    230 |   std::vector<std::pair<ShadowNode::Shared, std::unique_ptr<jsi::Value>>>
        |                                     ^
  /home/expo/workingdir/build/node_modules/react-native/ReactCommon/react/renderer/core/ShadowNode.h:36:18: note: 'Shared' has been explicitly marked deprecated here
     36 |   using Shared [[deprecated("Use std::shared_ptr<const ShadowNode> instead")]] =
        |                  ^
  /home/expo/workingdir/build/node_modules/react-native-reanimated/Common/cpp/reanimated/LayoutAnimations/LayoutAnimationsProxy.cpp:75:41: error: no member named 'rawProps' in 'facebook::react::Props'
     75 |       layoutAnimation.finalView->props->rawProps, (folly::dynamic)*rawProps));
        |       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
  8 errors generated.
  ninja: build stopped: subcommand failed.
  
  C++ build system [build] failed while executing:
      /home/expo/Android/Sdk/cmake/3.22.1/bin/ninja \
        -C \
        /home/expo/workingdir/build/node_modules/react-native-reanimated/android/.cxx/RelWithDebInfo/3d31171d/arm64-v8a \
        reanimated \
        worklets
    from /home/expo/workingdir/build/node_modules/react-native-reanimated/android
* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
BUILD FAILED in 2m 42s
Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
For more on this, please refer to https://docs.gradle.org/8.14.3/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
235 actionable tasks: 235 executed
Error: Gradle build failed with unknown error. See logs for the "Run gradlew" phase for more information.