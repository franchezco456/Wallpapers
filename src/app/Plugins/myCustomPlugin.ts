import {registerPlugin} from '@capacitor/core'

interface ImycustomPlugin{
    setHomeScreenWallpaper: () => Promise<{message:string}>
    setLockScreenWallpaper: () => Promise<{message:string}>
}

const myCustomPlugin = registerPlugin<ImycustomPlugin>('myWallpaperPlugin');

export default myCustomPlugin;
