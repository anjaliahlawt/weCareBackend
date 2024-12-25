# 
# Doctor_Appointment_Booking_Application

## A Doctor's Appointment Booking System -lets you register and Login and be able to view Doctors, book appointments, view/reschedule and also delete appointments.

# Use these credentials to check out features:

## Login as a Patient -
email : user1@gmail.com  password : user1

email : user2@gmail.com  password : user1

email : patient11@gmail.com password: patient11


## Login as a Doctor -
email : doc1@gmail.com  password : doc1   --> has few appointments already

email : pococare@gmail.com  password : pococare

## If you wish to try the Video Call feature, Please register your email as Doctor and log in with any of the above dummy emails as a Patient and then proceed because Nodemailer doesn't send an email if Doctor's email used is a dummy.

### Features Implemented:
* Authentication - JWT-based token
* Register/Login - Doctors and Patients
* Logout using blacklist
* Patient - Book Appointment POST
* Patient - Edit Appointment PATCH
* Patient & Doctors - Delete Appointment DELETE
* Patients - Start Video call instantly with the Doctors available
* Doctors can toggle between Video call availability
* Nodemailer feature to let the Doctor know the video call link via email

## Flow of this Application:
*  Register as a Patient or Doctor
*  Login as Patient
*  View All Doctors
*  Book an appointment to any of the Doctor
*  Able to modify or delete a booked appointment
*  If Doctor has made Video call availability YES & email is genuine , then patient can start a Video call
*  Once about to start, Video call meet link will be sent to Doctor of their email address
*  Doctor joins meet using the received meet link via email
*  Patient and Doctor can have a video chat in unique room
*  Able to start/stop video & mute/unmute audio
*  End video and back to Dashboard

*  Login as Doctor
*  Able to change Videocall availability
*  View appointments booked

*  Logout
   

## Tech Stacks used:
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,mongodb,html,css)](https://skillicons.dev)

## Tools used:
[![My Skills](https://skillicons.dev/icons?i=vercel)](https://skillicons.dev)
<img alt="Coder GIF" height=50 width=80 src="https://www.w3schools.com/whatis/img_npm.jpg" />



## API end points

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | api/patients/signup | This endpoint allow Patients to register. | 201 |
| POST | api/patients/login | This endpoint allow Patients to login. | 201 |
| PATCH | api/patients/update/:id | To update user
| DELETE | api/patients/delete/:id | To delete user
| GET | api/patients/all | To get all users | 200
| POST | api/patients/logout | To log user out
| POST | api/doctors/signup | This endpoint allow Doctors to register. | 201 |
| POST | api/doctors/login | This endpoint allow Doctors to login. | 201 |
| PATCH | api/doctors/update/:id | To update user
| DELETE | api/doctors/delete/:id | To delete user
| GET | api/doctors/all | To get all users | 200
| POST | api/doctors/logout | To log user out
| GET | api/appointments/ | To get all appointments | 200
| POST | api/appointments/add | This endpoint allow patients to add appointment. | 201 |
| PATCH | api/appointments/update/:id | To update appointment
| DELETE | api/appointments/delete/:id | To delete appointment
| GET | api/appointments/docapp/:id | To get the appointments based on specific Doctor | 200
| GET | api/appointments/patapp/:id | To get the appointments based on specific Patient | 200

# Coomand to run docker file

| build docker image :- docker build -t image_name .
| run docker container :- docker run -d --restart=always --name container_name -p 3000:3000 --env-file .env image_name










