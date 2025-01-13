# StreamerModeOnStreamIgnoreVR

A Vencord plugin that automatically manages Discord's Streamer Mode with VR considerations.

Fork of [StreamerModeOnStream](https://github.com/Vendicated/Vencord/blob/3243120baaa56f65866b532b731bc3426512c90e/src/plugins/streamerModeOnStream/index.ts).

## Why This Plugin?

When Streamer Mode is enabled in Discord, it changes the window's display affinity to make the window invisible to screen capture and streaming applications. However, this mechanism has an unintended side effect for VR users: the Discord window becomes completely invisible within VR headsets.

The WindowDisplayAffinity setting is designed to prevent sensitive information from being captured during streams. When set, it removes the window from the normal display rendering, which means VR headsets cannot render the Discord window at all. This effectively locks you out of Discord while streaming, even though you're in VR.

This plugin prevents Streamer Mode from being automatically activated when VR-related processes are running, ensuring that you can still access Discord while streaming in VR.

## Features

-   Toggles Streamer Mode when streaming
-   Prevents Streamer Mode activation if VR processes are running
-   Configurable VR process list

## Settings

-   `processesToCheck`: Comma-separated list of VR process names
-   Default: `vrserver.exe,VirtualDesktop.Server.exe`

## DOWNLOAD INSTRUCTIONS

> [!NOTE]
> Installation instructions copied from [ScattrdBlade/customSounds](https://github.com/ScattrdBlade/customSounds/blob/main/README.md)

You can either **clone** the repository OR **manually install** it by downloading it as a zip file.<br/>

> [!WARNING]
> Make sure you have the Vencord [developer build](https://docs.vencord.dev/installing/) installed.<br/>

### CLONE INSTALLATION

The cloning installation guide can be found [here](https://discord.com/channels/1015060230222131221/1257038407503446176/1257038407503446176) or via [the official Vencord Docs](https://docs.vencord.dev/installing/custom-plugins/).

### MANUAL INSTALLATION

> [!IMPORTANT]
> Inside the `Vencord` folder should be a folder called `src`. If you haven't already, create a folder called `userplugins` inside the `src` folder.

1. Click the green `<> Code` button at the top right of the repository and select `Download ZIP`
2. Unzip the downloaded ZIP file into the `userplugins` folder.
3. Ensure it's structured as `src/userplugins/StreamerModeOnStreamIgnoreVR`
4. Run `pnpm build` in the terminal (command prompt/CMD) and the plugin should be added.
