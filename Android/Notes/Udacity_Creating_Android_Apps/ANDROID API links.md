ANDROID API 
========================

https://developer.android.com/guide/components/fundamentals.html

https://developer.android.com/guide/topics/resources/string-resource.html

https://developer.android.com/guide/topics/permissions/index.html

https://developer.android.com/reference/android/os/AsyncTask.html


Alright, it's time for a bit of a quiz. Tell us which methods are run on the main UI thread. If you can't remember, at least you have a 50% chance or you could just read the JavaDoc on AsyncTask (https://developer.android.com/reference/android/os/AsyncTask.html) to refresh your memory.

execute()
onPreExecute()

doInBackground()

publishProgress()
onProgressUpdate()
onPostExecute()


That's right - most everything runs on the main UI thread, with just a few things running on the background thread -- like doInBackground and publishProgress.