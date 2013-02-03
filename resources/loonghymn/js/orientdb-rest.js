

var baseurl = "http://www.loonghymn.net:2480";

amplify.request.define( "orientdb_connect", "ajax", {
    url: baseurl+"/connect/{database}",
    type:"GET",                   
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback"
});


amplify.request.define( "orientdb_query", "ajax", {
    url: baseurl+"/query/{database}/sql/{sql}/{limit}",
    type:"GET",                   
    async : false,
    dataType: "jsonp",  
    jsonp:"callback",
    jsonpCallback:"jsonpcallback",
    username:"admin",
    password:"admin"
    
});