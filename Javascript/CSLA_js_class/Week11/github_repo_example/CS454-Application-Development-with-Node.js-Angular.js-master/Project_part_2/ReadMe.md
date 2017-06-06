### Node // Angular Project - DUE 1/23/2015 11:59pm

##### PART 2 - 100 pts
Adding new features to the TV Maze web application built from Part 1.

##### Show Detail View

 - Add a details button for each show returned from the search.

 -  Add a show controller, show service and show.html to your project. Add a new route to your api/routes.js that will get show details by id.
 
 - When the user clicks the details button - they are taken to a new page for the TV Show selected.  Create a new route that include the show id. Use the resolve option inside the routeProvider to get the show details by id from the service.

 - This new page should display the full details of the TV show including - name, image, description, genres, cast (including image, character name and actor name).  All details should be cleanly formatted - meaning no brackets or html tags ([] or {}).
 	
	- An image must display for the cast member. If no image is present for the character or the person - then replace that image with a default image.  Make sure you look at the data structure to determine that there is no image for the character or person.

	- The default image must be located inside your project.  Create an images folder and place the default image inside that folder.


![Search](https://github.com/cydneymikel/CS454/blob/master/Week08/tvmaze.search.jpg)
![Details](https://github.com/cydneymikel/CS454/blob/master/Week08/tvmaze.showdetail.jpg)
