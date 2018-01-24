# GAMING ANALYCTICS DASHBOARD

[Demo Preview](https://gentle-plains-77909.herokuapp.com/)

# Overview
A REST API exposes tabular data in JSON format. The data has rows and columns. This data is do be displayed in the UI in graphical format. All UI components shall be built as reusable widgets.

# Requirements

  - Create an single data API, to provide data for the following screens. Internally it should invoke the following pre-defined end points to fetch the required data.

  - Create a screen that displays snapshot of the following metrics
     - NetWin PUPD
     - TheoWin PUPD
     - CoinIn PUPD
     - HandlePulls PUPD

- Use the endpoint below get the above metrics for each day.
   http://mydomain.com/ask/floor/pupd?from=2017/11/04&to=2017/12/04

- For each Metric, a separate graph snapshot should be created, with a label displaying the average and a graph displaying the metrics over a timeline. As the user scrolls over the graph, tip showing the value on that day should be shown.

- Create Metric Drill down View for each of the above.
    When the user clicks on any of the above metric snapshot, a new screen shall be opened to display the drill down view. As the user scrolls over the graph, tip showing the value on that day should be shown. The user should be able to select any of the following date ranges to view the data.
   - 1 Month
   - 3 Months
   - 6 Months
   - 1 Year
   - Custom
   - Use the endpoint get the drill down for metrics for a selected range.
     http://mydomain.com/ask/floor/aggr?from=2017/11/04&to=2017/12/04

- Create a screen that displays data in Tabular format.
Note: The API shall return all the metrics at one go, select only the metric for which the drill down had to be shown.

- Create a screen that displays data returned by the below API is a standard tabular format. The table shall have options to sort, search, paginate etc.,
    - The user should also be able to pass in a date range and view data on the fly.
    - The implementation should allow for the table to be dynamic – as part of the testing, we will     pass different columns and rows to verify if the table displays the information dynamically. 
    - Ability to sort by column names – and the ability to search. Most data tables implementations support this natively. 

   - Use the API below, routed through the common data API.
http://mydomain.com/ask/floor/mfgmix?from=2017/11/04&to=2017/12/04

Note: The API shall return all the metrics at one go, that needs to be displayed in separate cards.

### Tech
* [ReactJs] - HTML enhanced for web apps!
* [VS Code] - awesome web-based text editor
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
