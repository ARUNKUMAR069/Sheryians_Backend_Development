Understanding Session And Cookies

1. How to create a session 
firsly install express-session

- Create a Session:
req.session.Session_name= Value;
- Read Session
req.session.Session_name
- Destroy
req.session.destroy()

Now, Cookies
1. Install Cokkie parser

npm i cookie-parser

- Create Cookie
- res.cookie(name,value) 
Response because cookies are in frontend and to send something to client we use res

- Read Cookie
 req.cookies.name_cookie

 - Cookie Delete
 res.clearCookie("name")


