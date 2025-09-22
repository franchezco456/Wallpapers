import {registerPlugin} from '@capacitor/core'

interface ImycustomPlugin{
    execute: () => Promise<{message:string}>
}

const myCustomPlugin = registerPlugin<ImycustomPlugin>('myWallpaperPlugin');

export default myCustomPlugin;
