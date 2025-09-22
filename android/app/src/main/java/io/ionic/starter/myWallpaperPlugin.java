package io.ionic.starter;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "myWallpaperPlugin")
public class myWallpaperPlugin extends Plugin {

  @PluginMethod()
  public void execute (PluginCall call){
    System.out.println("MY LOG PLUGIN" + "HELLO WORLD");
    WallpaperSuport Ws = new WallpaperSuport();
    Ws.lol();
    JSObject resp = new JSObject();
    resp.put("message", "resolve from plugin wallpaper java");
    call.resolve(resp);
  }
}
