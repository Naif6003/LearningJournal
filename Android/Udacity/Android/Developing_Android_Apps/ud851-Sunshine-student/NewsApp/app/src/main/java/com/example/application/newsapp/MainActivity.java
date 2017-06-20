package com.example.application.newsapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private ProgressBar progress;
    private TextView textView;
    private EditText editText;
    final String TAG = "MainActivity";
    private int asyncTaskCounter = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}


// DONE TODO 1. 2pts: Visit this site and look around a bit: https://newsapi.org/. Sign up and get your free api key.

// DONE TODO 2. 2pts: Past this url: https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=   with your api key added to the end in a browser. Cut and paste the result into a text file and submit here. Do this before you demo your app.

// DONE TODO 3. 1pt: In Android Studio, create a new project called "News App" with a blank activity.





// TODO 8. 10pts: Extend and implement a subclass of AsyncTask to handle the http request. Display the results in a textview.

// TODO 9. 4pts: Implement a search menu item. Make the item always appear in the toolbar.

// TODO 10. EC 2pts: Put spinning progress bars that turn on when the task is running and off when it's finished.