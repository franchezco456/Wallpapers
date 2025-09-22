package io.ionic.starter;
import static java.security.AccessController.getContext;
import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Build;
import android.content.Context;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class WallpaperSuport {
  private Context context;

  public WallpaperSuport(Context context){
    this.context = context;
  }

  public String homeScreen(String urlImage) throws JSONException {
    String result = "";
      try{
        WallpaperManager wallpaperManager = WallpaperManager.getInstance(context);
        Bitmap bitmap = downloadImage(urlImage);

        if(bitmap != null){
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N){
            wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_SYSTEM);

          }else{
            wallpaperManager.setBitmap(bitmap);
          }
          System.out.println("se cambio exitosa mente el homescreen");

          result = ("se cambio exitosa mente el homescreen");
          return(result);
        }else{
          System.out.println("Error al descargar la imagen");
          result = ("Error al descargar la imagen");
          return(result);
        }

      } catch (Exception e) {
        e.printStackTrace();
        System.err.println("Error general al descargar imagen: " + e.getMessage());
        return result;
      }

  }

  public String lockScreen(String urlImage) throws JSONException {
    String result = "";
    try{
      WallpaperManager wallpaperManager = WallpaperManager.getInstance(context);
      Bitmap bitmap = downloadImage(urlImage);

      if(bitmap != null){
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N){
          wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_LOCK);

        }else{
          wallpaperManager.setBitmap(bitmap);
        }
        System.out.println("se cambio exitosa mente el lockscreen");

        result = ("se cambio exitosa mente el lockscreen");
        return(result);
      }else{
        System.out.println("Error al descargar la imagen");
        result = ("Error al descargar la imagen");
        return(result);
      }

    } catch (Exception e) {
      e.printStackTrace();
      System.err.println("Error general al descargar imagen: " + e.getMessage());
      return result;
    }

  }

  private Bitmap downloadImage(String signedUrl){
    HttpURLConnection connection = null;

    try {
      URL url = new URL(signedUrl);
      connection = (HttpURLConnection) url.openConnection();
      connection.setDoInput(true);
      connection.connect();

      InputStream input = connection.getInputStream();
      return BitmapFactory.decodeStream(input);
    }catch (Exception e){
      e.printStackTrace();
      return null;
    } finally {
      if(connection !=null){
        connection.disconnect();
      }
    }
  }
}
