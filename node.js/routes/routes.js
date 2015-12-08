var appRouter = function(app) {
 app.get("/", function(req, res) {
    
    res.send("it works!!!");
   
 });

 app.post("/auth", function(req, res) {
    var username = req.body.username;
    var pw = req.body.password;
    var e0 = req.body.e0
    
    var mockUser = {}
    mockUser.email =  "admin@aghost.net";
    mockUser.nickname =  "admin";
    if(username == "E000090101") {
      mockUser.username = "E000090101"
    }

    if(username == "E000090102") {
      mockUser.username = "E000090101"
    }
    return res.send(mockUser);	
 });

} 
module.exports = appRouter;
