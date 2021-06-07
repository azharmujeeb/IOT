package com.firstapp.mac_address_01;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView = (TextView) findViewById(R.id.textView);

    }

    public void buttonClick(View view){
        try {
            List<NetworkInterface> networkInterfaceList = Collections.list(NetworkInterface.getNetworkInterfaces());

            String stringMac = "";

            for (NetworkInterface networkInterface:networkInterfaceList){
                if (networkInterface.getName().equalsIgnoreCase("wlan0")){
                    for (int i=0;i<networkInterface.getHardwareAddress().length;i++){
                        String stringMacByte = Integer.toHexString(networkInterface.getHardwareAddress()[i] & 0xFF);

                        if (stringMacByte.length() ==1 ){
                            stringMacByte = "0" + stringMacByte;
                        }

                        stringMac = stringMac + stringMacByte.toUpperCase() + ":";
                    }
                    break;
                }
            }

            textView.setText(stringMac);
        } catch (SocketException e) {
                e.printStackTrace();
        }
    }
}