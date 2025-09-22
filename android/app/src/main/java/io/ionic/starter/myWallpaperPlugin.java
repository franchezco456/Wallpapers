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

  @PluginMethod()
  public void execute (PluginCall call){
    System.out.println("MY LOG PLUGIN" + "HELLO WORLD");
    WallpaperSuport Ws = new WallpaperSuport();
    Ws.lol();

    SharedPreferences sp = getContext().getSharedPreferences(CAPACITOR_STORAGE, Context.MODE_PRIVATE);

    String data = sp.getString("data", "none");

    if(data.equals("none")){
      call.reject("no se pudo leer data de shared preferences");
      return;
    }

    JSONObject object = null;
    try {
      object = new JSONObject(data);
      if(!object.has("name") || !object.has("lastName")){
        call.reject("faltaron algunas propiedades");
        return;
      }

      System.out.println("nombre recibido de ionic " + object.get("name"));
      System.out.println("apellido recibido de ionic "  + object.get("lastName"));
    } catch (JSONException e) {
      throw new RuntimeException(e);
    }




    JSObject resp = new JSObject();
    resp.put("message", "resolve from plugin wallpaper java");
    call.resolve(resp);
  }
}
