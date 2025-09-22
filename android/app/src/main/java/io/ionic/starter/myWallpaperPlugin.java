package io.ionic.starter;

import android.content.Context;
import android.content.SharedPreferences;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;

@CapacitorPlugin(name = "myWallpaperPlugin")
public class myWallpaperPlugin extends Plugin {
  public static final String CAPACITOR_STORAGE = "CapacitorStorage";

  @PluginMethod
  public void setHomeScreenWallpaper(PluginCall call) throws JSONException {
    WallpaperSuport Ws = new WallpaperSuport(getContext());
    String response = "";

    SharedPreferences sp = getContext().getSharedPreferences(CAPACITOR_STORAGE, Context.MODE_PRIVATE);

    String data = sp.getString("data", "none");

    if(data.equals("none")){
      call.reject("no se pudo leer data de shared preferences");
      return;
    }

    JSONObject object = null;
    try {
      object = new JSONObject(data);
      if(!object.has("url")){
        call.reject("no se cargo la url");
        return;
      }

      response = Ws.homeScreen(object.getString("url"));
      JSObject resp = new JSObject();
      resp.put("message", response);
      call.resolve(resp);
    } catch (JSONException e) {
      throw new RuntimeException(e);
    }
  }

  @PluginMethod
  public void setLockScreenWallpaper(PluginCall call) throws JSONException {
    WallpaperSuport Ws = new WallpaperSuport(getContext());
    String response = "";

    SharedPreferences sp = getContext().getSharedPreferences(CAPACITOR_STORAGE, Context.MODE_PRIVATE);

    String data = sp.getString("data", "none");

    if(data.equals("none")){
      call.reject("no se pudo leer data de shared preferences");
      return;
    }

    JSONObject object = null;
    try {
      object = new JSONObject(data);
      if(!object.has("url")){
        call.reject("no se cargo la url");
        return;
      }

      response = Ws.lockScreen(object.getString("url"));
      JSObject resp = new JSObject();
      resp.put("message", response);
      call.resolve(resp);
    } catch (JSONException e) {
      throw new RuntimeException(e);
    }
  }
}
