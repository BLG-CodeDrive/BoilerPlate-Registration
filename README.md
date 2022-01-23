# BackEnd Rest APIs Development
Nodejs   ExpressJs   MongoDB     Twillio     Cloudinary      Postman

> Include:
> + OTP verification with twillio
> + Register, login with validation form.
> + Quick login with Google | Facebook
> + Forgot password, reset password and register a new 
    account  by Email verification.
> + Update personal information (name, password and avatar)
> + Upload Avatar profile pic to cloudinary
> + Change permissions and delete user accounts with Admin.


## Run the Express server only
### `npm run server`
### Server runs on http://localhost:5000 


### Postman APIs 

0.POST       OTP            localhost:5000/user/otpSent
{
    "phonenumber" : "1234567890",
    "channel" : "sms"
}


0.1 POST    verifyOtp       localhost:5000/user/verifyOtp
{
    "phonenumber" : "1234567890",
    "code" : "6 Digit Code from Mobile SMS" 
}


1.POST		 register		localhost:5000/user/register
{
    "name" : "shiva",
    "email": "abcdefg@gmail.com",
    "password": "123456"
}
"msg": "Register Success! Please activate your email to start."


2. POST		 Activation Token 	localhost:5000/user/activation
{
    "activation_token" : "      token get from email       "
}
"msg": "Account has been activated!"


3. POST		login		localhost:5000/user/login
{
    "email": "abcdefg@gmail.com",
    "password": "123456"
}
"msg": "Login success!"


4.POST		 Refresh Token	localhost:5000/user/refresh_token


5.POST		Fogot Password	localhost:5000/user/forgot
{
    "email": "abcdefg@gmail.com"
}
"msg": "Re-send the password, please check your email."


6.POST		Reset Passwrd	localhost:5000/user/reset	
{
    "password" : "1234567"
}
"msg": "Password successfully changed!"


7.GET		User info		localhost:5000/user/infor
Autherization Access Token


8.GET		Admin AllUser Info	localhost:5000/user/all_infor
Autherization Access Token


9.PATCH		Update User Details		localhost:5000/user/update
{
    "name" : "Shiva GGG",
    "avtar" : "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
}
 "msg": "Update Success!"


10.PATCH	UserRoleUpdate		localhost:5000/user/update_role/id: 615ac3fb64b2c706ec829d00
{
    "role": 1
}
 "msg": "Update Success!"


11.GET		Logout			localhost:5000/user/logout
