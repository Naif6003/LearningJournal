package com.example.android.sunshine;
import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


// DONE TODO COMPLETED (15) Add a class called ForecastAdapter
// DONE TODO  COMPLETED (22) Extend RecyclerView.Adapter<ForecastAdapter.ForecastAdapterViewHolder>
public class ForecastAdapter extends RecyclerView.Adapter<ForecastAdapter.ForecastAdapterViewHolder> {

    // DONE TODO COMPLETED (23) Create a private string array called mWeatherData
    private String[] mWeatherData;
    // DONE TODO COMPLETED (47) Create the default constructor
    public ForecastAdapter() {
    }

    // DONE TODO  (16) Create a class within ForecastAdapter called ForecastAdapterViewHolder
    // DONE TODO  (17) Extend RecyclerView.ViewHolder
    public class ForecastAdapterViewHolder extends RecyclerView.ViewHolder {
        // Within ForecastAdapterViewHolder ///////////////////////////////////////////////////////
        // DONE TODO COMPLETED (18) Create a public final TextView variable called mWeatherTextView
        public final TextView mWeatherTextView;
        // DONE TODO COMPLETED (19) Create a constructor for this class that accepts a View as a parameter
        // DONE TODO COMPLETED (20) Call super(view)
        // DONE TODO COMPLETED (21) Using view.findViewById, get a reference to this layout's TextView and save it to mWeatherTextView
        public ForecastAdapterViewHolder(View view) {
            super(view);
            mWeatherTextView = (TextView) view.findViewById(R.id.tv_weather_data);
        }
        // Within ForecastAdapterViewHolder ///////////////////////////////////////////////////////
    }

    // DONE TODO COMPLETED (24) Override onCreateViewHolder
    @Override
    public ForecastAdapterViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {
        Context context = viewGroup.getContext();
        // DONE TODO COMPLETED (25) Within onCreateViewHolder, inflate the list item xml into a view
        int layoutIdForListItem = R.layout.forecast_list_item;
        LayoutInflater inflater = LayoutInflater.from(context);
        boolean shouldAttachToParentImmediately = false;
        View view = inflater.inflate(layoutIdForListItem, viewGroup, shouldAttachToParentImmediately);
        // DONE TODO COMPLETED (26) Within onCreateViewHolder, return a new ForecastAdapterViewHolder with the above view passed in as a parameter
        return new ForecastAdapterViewHolder(view);
    }

    // DONE TODO COMPLETED (27) Override onBindViewHolder
    @Override
    public void onBindViewHolder(ForecastAdapterViewHolder forecastAdapterViewHolder, int position) {
        // DONE TODO COMPLETED (28) Set the text of the TextView to the weather for this list item's position
        String weatherForThisDay = mWeatherData[position];
        forecastAdapterViewHolder.mWeatherTextView.setText(weatherForThisDay);
    }

    // DONE TODO COMPLETED (29) Override getItemCount
    @Override
    public int getItemCount() {
        // DONE TODO COMPLETED (30) Return 0 if mWeatherData is null, or the size of mWeatherData if it is not null
        if (null == mWeatherData)
            return 0;
        return mWeatherData.length;
    }

    // DONE TODO COMPLETED (31) Create a setWeatherData method that saves the weatherData to mWeatherData
    public void setWeatherData(String[] weatherData) {
        mWeatherData = weatherData;
        // DONE TODO COMPLETED (32) After you save mWeatherData, call notifyDataSetChanged
        notifyDataSetChanged();
    }
}
