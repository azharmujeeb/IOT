package com.firstapp.iot_project_01;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class LoginActivity02 extends AppCompatActivity {
    EditText email, password;
    Member Member;
    DatabaseReference datareference;
    Button next;

    private FirebaseAuth auth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login02);

        email = (EditText) findViewById(R.id.email02);
        password = (EditText) findViewById(R.id.password02);
        Member = new Member();
        datareference = FirebaseDatabase.getInstance().getReference().child("Sign Up App");
        next = (Button) findViewById(R.id.next03);

        auth = FirebaseAuth.getInstance();

        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String txt_email = email.getText().toString();
                String text_password = password.getText().toString();


                if (TextUtils.isEmpty(txt_email) || TextUtils.isEmpty(text_password)) {
                    Toast.makeText(LoginActivity02.this, "Empty Credentials", Toast.LENGTH_SHORT).show();
                } else if (text_password.length() < 6) {
                    Toast.makeText(LoginActivity02.this, "Password too short", Toast.LENGTH_SHORT).show();
                } else {
                    registerUser(txt_email, text_password);
                }
                Member.setEmail01(email.getText().toString().trim());
                Member.setPassword01(password.getText().toString().trim());
                datareference.push().setValue(Member);
                Toast.makeText(LoginActivity02.this, "Data Inserted Successfully", Toast.LENGTH_SHORT).show();
                sendusertohome();
            }
        });
    }

    private void sendusertohome() {
        Intent home = new Intent(LoginActivity02.this, HomeActivity.class);
        startActivity(home);
        finish();
    }


    private void registerUser(String email, String password) {
        auth.createUserWithEmailAndPassword(email, password).addOnCompleteListener(LoginActivity02.this, new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(LoginActivity02.this, "User registered successfully", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(LoginActivity02.this, "Registration failed", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }




}