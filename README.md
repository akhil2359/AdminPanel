ONPASSIVE ADMIN PANEL. Using this app you can create, update and track employees.

Tech Stack:-  ReactJS, NodeJS,ExpressJS,MYSQL


***-------APP SCREENSHOTS**-------:-


**1. LOGIN SCREEN**

![Screenshot 2021-05-24 at 8 54 51 AM](https://user-images.githubusercontent.com/32734840/119292460-10d8cc00-bc6e-11eb-93e1-437240fd4f28.png)

**2. SIGNUP SCREEN**
![Screenshot 2021-05-24 at 8 55 02 AM](https://user-images.githubusercontent.com/32734840/119292498-24843280-bc6e-11eb-8ca5-42727863e4a0.png)

**3.FORGOT PASSWORD SCREEN**
![Screenshot 2021-05-24 at 8 55 09 AM](https://user-images.githubusercontent.com/32734840/119292531-35cd3f00-bc6e-11eb-88c6-be750d6d6d7e.png)

**4. FORGOT PASSWORD AFTER SENDING RESET LINK TO EMAIL**
![Screenshot 2021-05-24 at 8 55 23 AM](https://user-images.githubusercontent.com/32734840/119292561-467db500-bc6e-11eb-8165-4b0d4d539051.png)

**5. RESET PASSSWORD EMAIL PREVIEW **

![Screenshot 2021-05-24 at 9 00 30 AM](https://user-images.githubusercontent.com/32734840/119292701-8349ac00-bc6e-11eb-8bc1-9b94c567011d.png)

**6.ADMIN DASHBOARD PAGE **
  


![Screenshot 2021-05-24 at 8 55 35 AM](https://user-images.githubusercontent.com/32734840/119292737-9492b880-bc6e-11eb-8500-4ab2c206e611.png)
![Screenshot 2021-05-24 at 8 55 57 AM](https://user-images.githubusercontent.com/32734840/119292805-bb50ef00-bc6e-11eb-9af8-997e1c644514.png)
![Screenshot 2021-05-24 at 8 56 11 AM](https://user-images.githubusercontent.com/32734840/119292819-c277fd00-bc6e-11eb-96c6-42f738878abb.png)
![Screenshot 2021-05-24 at 8 56 17 AM](https://user-images.githubusercontent.com/32734840/119292861-d7549080-bc6e-11eb-86dc-ed27aa08725a.png)
![Screenshot 2021-05-24 at 8 56 24 AM](https://user-images.githubusercontent.com/32734840/119292870-e0ddf880-bc6e-11eb-97f5-945e6253c293.png)
![Screenshot 2021-05-24 at 8 56 29 AM](https://user-images.githubusercontent.com/32734840/119292882-e8050680-bc6e-11eb-92e6-96c10a7febeb.png)
![Screenshot 2021-05-24 at 9 12 27 AM](https://user-images.githubusercontent.com/32734840/119293512-2f3fc700-bc70-11eb-9d94-4b6811193358.png)



**-------API DOCUMENTATION-------**

**Postman Collection**:- https://www.postman.com/collections/f45fb12a34793479c522


**1. GET - http://localhost:3001/api/employees**

This API FETCHES ALL EMPLOYEES
**Accepted Query Params**:- name,location,salary,age,jobtitle,location

![Screenshot 2021-05-24 at 9 18 12 AM](https://user-images.githubusercontent.com/32734840/119294391-f9034700-bc71-11eb-9899-dfd743a69c3d.png)


 

**2. POST:-   http://localhost:3001/api/employees**
        Adds new employee
![Screenshot 2021-05-24 at 9 20 23 AM](https://user-images.githubusercontent.com/32734840/119294428-0d474400-bc72-11eb-802a-415b811496c3.png)


**3. PUT - http://localhost:3001/api/employees/:id**
Updates Employee
![Screenshot 2021-05-24 at 9 23 49 AM](https://user-images.githubusercontent.com/32734840/119294460-2223d780-bc72-11eb-92b5-8917c88fd073.png)


**4. DELETE - http://localhost:3001/api/employees/:id**
Deletes Employee
![Screenshot 2021-05-24 at 9 24 15 AM](https://user-images.githubusercontent.com/32734840/119294486-2fd95d00-bc72-11eb-8dc8-256522b52173.png)


**5. POST - http://localhost:3001/api/users/signup
Adds new admin user
![Screenshot 2021-05-24 at 9 24 25 AM](https://user-images.githubusercontent.com/32734840/119294515-3f58a600-bc72-11eb-99eb-70f0b5d71769.png)


**6. POST - http://localhost:3001/api/users/login**
LOGIN admin user
![Screenshot 2021-05-24 at 9 24 30 AM](https://user-images.githubusercontent.com/32734840/119294522-48e20e00-bc72-11eb-8d3d-1919c4bb2837.png)

**7. http://localhost:3001/api/users/forgot-password**
Sends reset link to email
![Screenshot 2021-05-24 at 9 24 35 AM](https://user-images.githubusercontent.com/32734840/119294541-526b7600-bc72-11eb-8233-958782c6c816.png)
