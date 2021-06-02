package com.firstapp.iot_project_01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {

    TextView login;
    Button signup;
    Button email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        login = (TextView) findViewById(R.id.login);
        signup = (Button) findViewById(R.id.signup);
        email = (Button) findViewById(R.id.email);
        login.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v) {
                sendtologin();
            }
        });

        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendtosignup();
            }
        });
        email.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendtosignup();
            }
        });
    }

    private void sendtosignup() {
        Intent signup = new Intent(LoginActivity.this,LoginActivity02.class);
        startActivity(signup);
        finish();
    }

    private void sendtologin() {
        Intent login = new Intent(LoginActivity.this,SignupActivity.class);
        startActivity(login);
        finish();
    }
}