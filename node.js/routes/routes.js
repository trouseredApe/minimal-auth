var auth = require("basic-auth");

var appRouter = function(app) {
 app.get("/", function(req, res) {
    res.send("it works!!!");
 });

 app.get("/auth", function(req, res) {
    console.log(req.headers.authorization);
    var user = auth(req);
    var username = user.name;
    
    console.log(user);
    
    var mockUser = {}
    mockUser.email =  "admin@aghost.net";
    mockUser.nickname =  "admin";
    
    if(username == "E000090101") {
      mockUser.username = "E000090101"
      mockUser.user_id = 'aghost.admin.1';
    }

    if(username == "E000090102") {
      mockUser.username = "E000090101"
      mockUser.user_id = 'aghost.admin.2';
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.json(mockUser);	
 });

} 

module.exports = appRouter;