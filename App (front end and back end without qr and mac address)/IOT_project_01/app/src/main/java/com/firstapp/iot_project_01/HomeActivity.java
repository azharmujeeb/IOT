package com.firstapp.iot_project_01;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class HomeActivity extends AppCompatActivity {
    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;

     TextView retriveTV;
     Button next;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        firebaseDatabase = FirebaseDatabase.getInstance();

        databaseReference = firebaseDatabase.getReference().child("Count");

        retriveTV = findViewById(R.id.no_of_people);

        
        next = (Button) findViewById(R.id.next04);
        
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendusertostatuspage();
            }
        });

        getdata();
        
    }

    private void sendusertostatuspage() {
        Intent status = new Intent(HomeActivity.this, StatusActivity.class);
        startActivity(status);
        finish();
    }


    private void getdata() {
        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
              int intval2 = Integer.valueOf(String.valueOf(snapshot.getValue()));

                retriveTV.setText(snapshot.getValue().toString());
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
                Toast.makeText(HomeActivity.this, "Fail to get data.", Toast.LENGTH_SHORT).show();
            }
        });
    }

}