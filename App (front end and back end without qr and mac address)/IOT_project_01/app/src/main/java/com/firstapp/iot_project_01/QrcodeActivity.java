package com.firstapp.iot_project_01;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.budiyev.android.codescanner.CodeScanner;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.DecodeCallback;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.zxing.Result;

import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.List;

public class QrcodeActivity extends AppCompatActivity {
    CodeScanner mCodeScanner;
    String[] PERMISSIONS = {Manifest.permission.CAMERA};
    CodeScannerView scannerView;
    Button click;
    TextView textView;
    Member Member;
    DatabaseReference reff;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qrcode);
        scannerView = findViewById(R.id.scanner_view);
        click = (Button) findViewById(R.id.click_me);
        textView = (TextView) findViewById(R.id.textView);
        Member = new Member();
        reff= FirebaseDatabase.getInstance().getReference().child("Mac_Address");

        if(Build.VERSION.SDK_INT >= 23){
            if(this.checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                this.requestPermissions(PERMISSIONS, 2002);
            } else {
                startScanner();
            }

        } else {
            startScanner();
        }

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
        click.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Member.setMac_address(textView.getText().toString().trim());
                reff.push().setValue(Member);
                Toast.makeText(QrcodeActivity.this, "Data Inserted Successfully", Toast.LENGTH_SHORT).show();
                sendusertohome();
            }
        });
    }

    private void sendusertohome() {
        Intent home= new Intent(QrcodeActivity.this,HomeActivity.class);
        startActivity(home);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if(requestCode == 2002) {
            if(grantResults[0] == PackageManager.PERMISSION_GRANTED){
                startScanner();
            }else{
                Toast.makeText(QrcodeActivity.this, "I need Camera PermissionS!!!", Toast.LENGTH_LONG).show();
            }

        }
    }

    private void startScanner() {

        mCodeScanner = new CodeScanner(this, scannerView);
        mCodeScanner.setDecodeCallback(new DecodeCallback() {
            @Override
            public void onDecoded(@NonNull final Result result) {
                QrcodeActivity.this.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(QrcodeActivity.this, result.getText(), Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });
        scannerView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mCodeScanner.startPreview();
            }
        });

    }

    @Override
    protected void onResume() {
        super.onResume();
        mCodeScanner.startPreview();
    }

    @Override
    protected void onPause() {
        if(mCodeScanner!=null)
            mCodeScanner.releaseResources();
        super.onPause();
    }
    }

