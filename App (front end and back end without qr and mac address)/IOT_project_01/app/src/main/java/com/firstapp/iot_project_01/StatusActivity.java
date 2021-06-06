package com.firstapp.iot_project_01;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class StatusActivity extends AppCompatActivity {

    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;

    TextView status;
    Button next;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_status);

        firebaseDatabase = FirebaseDatabase.getInstance();

        //databaseReference = firebaseDatabase.getReference().child("Status");

        status = (TextView) findViewById(R.id.status2);

        next = (Button) findViewById(R.id.next05);

        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendusertohomepage();
            }
        });

        getstatus();
    }

    private void sendusertohomepage() {
        Intent home = new Intent(StatusActivity.this,HomeActivity.class);
        startActivity(home);
        finish();
    }

    private void getstatus() {
        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                String status3 = snapshot.getValue(String.class);

                status.setText(status3);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });
    }
}