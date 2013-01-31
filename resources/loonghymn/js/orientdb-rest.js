amplify.request.define( "orientdb_connect", "ajax", {
    url: "http://localhost:2480/connect/{database}",
    type:"GET",                   
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback", 
    username: "admin",
    password: "admin"                 
});


amplify.request.define( "orientdb_query", "ajax", {
    url: "http://localhost:2480/query/{database}/sql/{sql}/{limit}",
    type:"GET",                   
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback", 
    username: "admin",
    password: "admin"                 
});