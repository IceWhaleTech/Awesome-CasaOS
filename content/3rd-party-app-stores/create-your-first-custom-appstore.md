---
title: Create your first custom AppStore for CasaOS
---

# Create your first custom AppStore for CasaOS

The quickest way to create your own AppStore, is simply forking an existing AppStore and trim all the apps and unneccessary files before adding your own.

There are few AppStores listed at [Store list](/content/3rd-party-app-stores/list.html), you can choose one of them to fork.

## Prerequisites

You should be comfortable about repository forking and pushing commits on GitHub before proceeding to the steps.

## Steps

### Step 1 - Fork an AppStore

In the steps below, we will start by forking the official CasaOS AppStore.

1. Go to <https://github.com/iceWhaleTech/CasaOS-AppStore> and click the `Fork` button on the top right corner.
1. If everything looks good, click on `Create Fork` button.
1. Wait until the forked repository is ready

### Step 2 - Cleanup the forked repository

1. Hit the `[.]` key to open the repository in an online IDE.
1. Remove all folders, but keep the `Apps` folder
1. Remove all subfolders in the `Apps` folder, but you can keep one subfolder as a template.
1. Remove all files, but the following files are optional to keep:

    - `category-list.json` (category list along with description)
    - `recommend-list.json` (featured apps as seen in the CasaOS AppStore UI)
    - `CONTRIBUTING.md` (guidelines for creating an app)

### Step 3 - Add the first app

1. Follow the `CONTRIBUTING.md` to add your first app to the `Apps` folder.

    > You can use the existing app in the `Apps` folder as a template.

1. Once you are done, push the changes.

### Step 4 - Test the AppStore

1. Go back to the GitHub repository page at step 3 above.
1. Click on the `<> Code` dropdown menu
1. Copy the URL of `Download ZIP`
1. Go to AppStore UI in CasaOS, and click on `+ Add Source`
1. Paste the URL then click on `Add +`
1. Wait until the app from your AppStore shows up

> If you think your custom AppStore adds value to the CasaOS community and are committed to its ongoing maintenance, we'd be delighted to feature it on awesome.casaos.io. Please submit a PR at <https://github.com/IceWhaleTech/Awesome-CasaOS> for consideration.