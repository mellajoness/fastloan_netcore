package io.fidelity.fidelityfastloan;

import android.app.Application;
import android.util.Log;

import in.netcore.smartechfcm.NetcoreSDK;

public class MyApplication extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    NetcoreSDK.register(this, "32fcd24519d69612bcef8f00c55f3d3f");
    Log.d("Netcore","Token: "+NetcoreSDK.getPushToken(this));

  }
}
