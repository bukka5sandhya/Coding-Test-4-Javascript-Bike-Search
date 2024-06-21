Bike Search

The goal of this coding exam is to quickly get you off the ground with HTML search input element and Bootstrap spinner

Use the below reference image

![image](https://github.com/bukka5sandhya/Coding-Test-4-Javascript-Bike-Search/assets/133884532/86b51943-6d94-4120-b0de-4d2b45ef5b3b)

https://assets.ccbp.in/frontend/content/dynamic-webapps/bike-search-op.gif

https://assets.ccbp.in/frontend/content/dynamic-webapps/bike-search-op.gif

Instructions

Add the id searchInput to the HTML input element

Add the id searchResults to the HTML container element

Achieve the design with HTML, CSS, and functionality with JS

When the page is opened or a value is entered in the HTML input element with id searchInput and press on Enter key

Make an HTTP Request (GET method) using Fetch with URL https://apis.ccbp.in/city-bikes?bike_name=

The value entered in the HTML input element with id searchInput should be the value for the query parameter of the given URL

Add the loading status with the Bootstrap component spinner while making HTTP Request (GET method) as shown in the image.

Create HTML elements dynamically to set the data i.e, the bike name and city, and add the newly created element to the HTML container element with id as searchResults

Quick Tip

Use the below class for Bootstrap spinner

class= "spinner-border"

Note

The children elements of the HTML container element with id searchResults should be the dynamically created HTML container elements only.
