package com.limitlessChildren;

import android.os.Bundle; // here 

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
     // SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);

  }

 @Override
   protected String getMainComponentName() {
     return "LimitlessChildren";
   }

}