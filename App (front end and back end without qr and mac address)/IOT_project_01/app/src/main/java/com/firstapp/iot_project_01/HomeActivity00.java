package com.firstapp.iot_project_01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class HomeActivity00 extends AppCompatActivity {

    Button room;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home00);

        room = (Button) findViewById(R.id.room);

        room.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendusertohome();
            }
        });
    }

    private void sendusertohome() {

        Intent home = new Intent(HomeActivity00.this, HomeActivity.class);
        startActivity(home);
        finish();
    }
}