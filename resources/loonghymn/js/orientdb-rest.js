

var url = "http://www.loonghymn.net:2480";

amplify.request.define( "orientdb_connect", "ajax", {
    url: "http://www.loonghymn.net:2480/connect/{database}",
    type:"GET",                   
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback"
});


amplify.request.define( "orientdb_query", "ajax", {
    url: url+"/query/{database}/sql/{sql}/{limit}",
    type:"GET",                   
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback"
});