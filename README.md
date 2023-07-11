API Documentation
Click below link to get the API Documentation
https://documenter.getpostman.com/view/16159027/2s93zCYKuy 

You can see the all tested response by clicking the arrow sign.


Database Configuration
Create a database in MySQL DB named “book_recommendation”









Backend Configuration
I’ve developed serve side using Laravel (PHP framework). Prerequisites are given below:
"php": "^7.3|^8.0",
Must have composer installed.

Then clone the below project to your machine.
https://github.com/mahbub3330/book-recommendation.git

Goto the server  directory. Then open your terminal and press the below commands
composer install (if any issue arise then use composer install –ignore-platform-reqs
php artisan key:generate
Copy .env.example to .env
Change .env file.  DB_DATABASE =book_recommendation
Enter “php artisan db:seed” in the terminal
After that run “php artisan serve” . make sure the server is running on 8000 port otherwise you have to change in frontend inside “packeage.json” file  "proxy": "http://localhost:8000/api" to the changed port.

As this a testing purpose I don’t keep user registration. So our default user mail is “example@gmail.com”. And we will use this email and user_id=1 for all other work.

Features : 
Custom Request validation added.
Custom Validation Rules added
Used Collection for API resource collection
Used Resource for API resource.

 












Frontend Configuration 
I’ve developed frontend using React js. Prerequisites are given below:
Node v18.16.1
(my NPM version is v9.7.2)
If you have already cloned the project from git. For frontend goto to the client folder.and provide below command. Please stay connected with internet while running frontend app to avoid errors

 npm install (if any issue arise then npm install --legacy-peer-deps).
npm start (Please stay connected with internet while running frontend app to avoid errors)

I’ve used Google Book API for searching books. 

Features: 
Made reusable components 
Made module basis API for both internal(laravel-api) and external(google-apil API. so that it can be reused 

NOTE:
For Sign In form you do not have to provide any username, password. Just click sign in button. By default it’ll sign in as user_id = 1;
To add book recommendation please provie “example@gmail.com” user email. Others email will throw error. As we don’t have user registration so this email actually we seeded when we configured backend.
I’ve used localstorage to track login user info. As my main task is only for integrating external API (google books) to search and retrive books and internal API (laravel) to store books and fetching stored books. I didn’t try to others functionalities.
I’ve tested using  “React”, “Java”, “Php” these keywords. So if you’re facing trouble or not getting response you can try these keywords to search books.


 



