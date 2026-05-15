# Mobile Control & Clipboard Sync Setup Guide

Complete guide to control your Android phone from your Windows laptop and sync clipboards.

## 🎯 What You'll Get

1. **Screen Mirroring & Control** - View and control your phone from laptop
2. **Clipboard Sync** - Copy on phone, paste on laptop (and vice versa)
3. **File Transfer** - Easy file sharing between devices

---

## 📱 Part 1: Phone Control with scrcpy

### What is scrcpy?

Free, open-source tool to display and control Android devices. Works over USB or WiFi with minimal latency.

### Installation (Windows)

**Option 1: Using Scoop (Recommended)**

```cmd
scoop install scrcpy
```

**Option 2: Manual Download**

1. Download from: https://github.com/Genymobile/scrcpy/releases
2. Extract to a folder (e.g., `C:\scrcpy`)
3. Add to PATH or run from that folder

### Phone Setup

1. **Enable Developer Options**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - You'll see "You are now a developer!"

2. **Enable USB Debugging**
   - Go to Settings → Developer Options
   - Enable "USB Debugging"

3. **Connect Phone**
   - Connect via USB cable
   - Accept the "Allow USB debugging?" prompt on phone

### Usage

**Basic Control (USB)**

```cmd
scrcpy
```

**Wireless Control (WiFi)**

```cmd
# First time: Connect via USB and run
adb tcpip 5555

# Find your phone's IP (Settings → About → Status → IP address)
# Then connect wirelessly
adb connect 192.168.1.XXX:5555

# Now run scrcpy wirelessly
scrcpy
```

**Useful scrcpy Options**

```cmd
# Lower quality for better performance
scrcpy --bit-rate 2M --max-size 1024

# Record screen
scrcpy --record file.mp4

# Turn off phone screen (save battery)
scrcpy --turn-screen-off

# Stay awake while charging
scrcpy --stay-awake

# Show touches (useful for demos)
scrcpy --show-touches
```

### Keyboard Shortcuts in scrcpy

- `Ctrl+C` / `Ctrl+V` - Copy/Paste
- `Ctrl+Shift+V` - Paste clipboard as keystrokes
- `Ctrl+S` - Switch between portrait/landscape
- `Ctrl+F` - Fullscreen
- `Ctrl+O` - Turn screen off
- `Ctrl+P` - Power button
- `Ctrl+H` - Home button
- `Ctrl+B` - Back button
- `Ctrl+N` - Expand notification panel

---

## 📋 Part 2: Clipboard Sync

### Prerequisites

**On Phone (Termux)**

```bash
# Install Termux from F-Droid or Play Store
# Then install termux-api
pkg install termux-api

# Also install Termux:API app from same store
```

**On Laptop (Windows)**

```cmd
# Install ADB (if not already installed)
scoop install adb

# Install Node.js dependency
npm install clipboardy
```

### Usage

**One-time Sync**

```cmd
# Copy from laptop to phone
npm run clipboard:push

# Copy from phone to laptop
npm run clipboard:pull
```

**Auto-sync (Watch Mode)**

```cmd
# Continuously sync both ways
npm run clipboard:watch
```

This will automatically detect clipboard changes on either device and sync them!

### Troubleshooting

**"No device connected"**

- Make sure USB debugging is enabled
- Run `adb devices` to check connection
- Try unplugging and replugging USB cable

**"termux-clipboard-get not found"**

- Install termux-api: `pkg install termux-api`
- Install Termux:API app from store
- Restart Termux

**WiFi ADB not working**

- Ensure phone and laptop are on same WiFi network
- First connect via USB, then run `adb tcpip 5555`
- Find phone IP in Settings → About → Status
- Run `adb connect <phone-ip>:5555`

---

## 🚀 Part 3: Quick Start Commands

Add these to your `package.json` scripts:

```json
{
  "scripts": {
    "mobile:control": "scrcpy",
    "mobile:control:wireless": "scrcpy --bit-rate 2M",
    "clipboard:push": "node scripts/utilities/clipboard-sync.js push",
    "clipboard:pull": "node scripts/utilities/clipboard-sync.js pull",
    "clipboard:watch": "node scripts/utilities/clipboard-sync.js watch"
  }
}
```

---

## 💡 Pro Tips

1. **Keep scrcpy window always on top**
   - Right-click title bar → Always on top

2. **Use WiFi for convenience**
   - Set up once, then no cables needed
   - Slightly higher latency but very usable

3. **Clipboard sync in background**
   - Run `npm run clipboard:watch` in a separate terminal
   - Leave it running while you work

4. **File transfer via ADB**

   ```cmd
   # Push file to phone
   adb push file.txt /sdcard/Download/

   # Pull file from phone
   adb pull /sdcard/Download/file.txt .
   ```

5. **Screen recording**
   ```cmd
   # Record phone screen from laptop
   scrcpy --record recording.mp4
   ```

---

## 🔧 Advanced: WiFi ADB Permanent Setup

Create a batch file `connect-phone.bat`:

```batch
@echo off
echo Connecting to phone via WiFi...
adb connect 192.168.1.XXX:5555
echo.
echo Starting scrcpy...
scrcpy --bit-rate 2M --max-size 1024
```

Replace `192.168.1.XXX` with your phone's IP address.

---

## 📚 Additional Resources

- scrcpy GitHub: https://github.com/Genymobile/scrcpy
- Termux Wiki: https://wiki.termux.com/
- ADB Documentation: https://developer.android.com/tools/adb

---

## ❓ Common Issues

**Issue: Phone screen is black in scrcpy**

- Solution: Disable "Force GPU rendering" in Developer Options

**Issue: Clipboard sync is slow**

- Solution: Reduce SYNC_INTERVAL in clipboard-sync.js

**Issue: Connection drops frequently**

- Solution: Use USB instead of WiFi, or move closer to router

**Issue: Can't type on phone**

- Solution: Make sure scrcpy window is focused, try clicking on it first
