package com.firstapp.iot_project_01;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;


public class SignupActivity extends AppCompatActivity {
    EditText email,password;
    Button next02;
    DatabaseReference reff;
    Member Member;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        email = (EditText) findViewById(R.id.email04);
        password = (EditText) findViewById(R.id.password01);
        next02 = (Button) findViewById(R.id.next01);
        Member = new Member();

        reff= FirebaseDatabase.getInstance().getReference().child("Log In");

        next02.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Member.setEmail02(email.getText().toString().trim());
                Member.setPassword02(password.getText().toString().trim());
                reff.push().setValue(Member);
                Toast.makeText(SignupActivity.this, "Data Inserted Successfully", Toast.LENGTH_SHORT).show();
                sendusertohome();
            }

            private void sendusertohome() {
                Intent home2 = new Intent(SignupActivity.this, HomeActivity.class);
                startActivity(home2);
                finish();
            }
        });


    }
}





