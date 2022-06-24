package com.jugglingwarehouse;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

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