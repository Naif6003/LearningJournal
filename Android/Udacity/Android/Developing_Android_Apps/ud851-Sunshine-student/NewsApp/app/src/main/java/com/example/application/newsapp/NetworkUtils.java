package com.example.application.newsapp;

/**
 * Created by cowboyuniverse on 6/19/17.
 */

import android.net.Uri;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

/**
 * Created by mark on 6/12/17.
 */
// TODO 4. 5pts: Create a new class called NetworkUtils. Define the appropriate base_url and query_parameter constants (make sure they are Java constants) here as static class members.

// TODO 5. 5pts: Create a static method in NetworkUtils that uses Uri.Builder to build the appropriate url, the url you used in (2), to return a completed Java URL.
// DONE TODO 6. 2pts: Put this method in your NetworkUtils class:

//https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=97635e7f96974c1b95b2f7a11c1b792b

public class NetworkUtils {
    public static final String NEWS_BASE_URL = "https://newsapi.org/v1/articles";
    public static final String SOURCE = "the-next-web";
    public static final String PARAM_SORT = "sortBy=latest";
    public static final String API = "97635e7f96974c1b95b2f7a11c1b792b";


    public static URL makeURL(String locationQuery, String sortBy, String api){
        Uri uri = Uri.parse(NEWS_BASE_URL).buildUpon()
                .appendQueryParameter(SOURCE, locationQuery)
                .appendQueryParameter(PARAM_SORT, sortBy)
                .appendQueryParameter(API, api)
                .build();

        URL url = null;
        try{
            url = new URL(uri.toString());
        }catch(MalformedURLException e){
            e.printStackTrace();
        }

        return url;
    }

    public static String getResponseFromHttpUrl(URL url) throws IOException{
        HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();
        try {
            InputStream in = urlConnection.getInputStream();
            Scanner scanner = new Scanner(in);
            scanner.useDelimiter("\\A");

            boolean hasInput = scanner.hasNext();
            if (hasInput) {
                return scanner.next();
            } else {
                return null;
            }
        }finally{
            urlConnection.disconnect();
        }
    }

}
