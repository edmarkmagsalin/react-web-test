# Project Summary

This is a 1 - 2hr test project, you will require to create a fully functional CRUD ( GET, PUT, POST, DELETE ). The majority of the React application will already be built for you. part of this project will be exploring the API and finding the appropriate endpoints to utilize to build the required functionality. utilize API endpoints that help you accomplish the goals of each feature and utilize the necessary `react hooks` that suits to your need.

To help you understand wether or not you API requests are failing or successful, we've used a UI tool to build in the ability to visualize notifications in the app. The specific style we use is referred to as a "toast" notification. To take advantage of this capability to visualize successful and failed API requests, an additional line of code will need to be added to [axios](https://www.npmjs.com/package/axios) requests, examples of which can be found below.

* Success: `toast.success("Success!");`
* Failure: `toast.error("Failed!");`

### Setup

* `Fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm install`.
* Run `npm start`.
* In a seperate terminal, `cd` into the project directory.

### API Documentation

The Base API url is located at `./src/helper/axios.jsx`
```
// Default base url
import axios from 'axios'

export default axios.create({
  baseURL: 'https://reqres.in/api/'
})
```

Please reference [this](https://reqres.in/) API documentation when completing the project steps.

# Requirements

First use `useEffect` hook to fetch list of users and display `usersToDisplay` state in a form of table. To add some design, you can free to use any of css framework you choose.

### Step 1: GET

In this first step, we'll make use of `axios` to get the `Get All Users` button to work. When fetching data from a server you should always use a GET request.


#### Instructions
* Open `./src/App.js`.
* Locate the pre-made `getUsers()` method.
* Using `axios` and the provided API documentation make a `GET` request to receive all the users.
	* If the request is successful, use `setUsers()` state to update the value of `usersToDisplay` and use `toast.success` to fetch success message.
	* If the request is unsuccessful, use `toast.error`	.
	
### Step 2: UPDATE

In this step, we'll make use of `axios` to update the `name` and `job` of a user. When modifying/updating data on a server, typically, you'll use a `PUT` request.

* Open `./src/App.js`.
* Locate the pre-made `updateUser()` method and add necessary parameters like `id`, `name` and `job`.
* If the request is successful, use `setUsers()` to update the value of `usersToDisplay` and use `toast.success` to display success message.
* If the request is unsuccessful, use toast.error.

### Step 3: CREATE

In this step, we'll make use of `axios` to get the `Add a User` button to work. When creating new data on a server you should always use a `POST` request.

#### Instructions

* Open `./src/App.js`.
* Locate the pre-made `addUser()` method.
* If the request is successful, use `setUsers()` to update the value of `usersToDisplay` and use `toast.success`.
* If the request is unsuccessful, use `toast.error`.

### Step 4 : DELETE

In this step, we'll make use of `axios` to delete a user. When deleting data on a server you should always use a DELETE request.

#### Instructions

* Open `./src/App.js`.
* Locate the pre-made `deleteUser()` method and add the necessary parameter like `id`.
* If the request is successful, use `setUsers()` to update the value of `usersToDisplay` and use `toast.success`.
* If the request is unsuccessful, use `toast.error`.

### Bonus

If there is extra time, try to complete your application with `registration` and `login`.

# Good Luck!
