<a name="top"></a>
# 13 Object-Relational Mapping (ORM): E-Commerce Back End
![Static Badge](https://img.shields.io/badge/MIT-blue.svg?style=plastic)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation and Usage](#installation-and-usage)
- [Technologies Used](#technologies-used)
- [GitHub](#github)
- [License](#license)

## Overview

This project involves building the back end for an e-commerce site, focusing on configuring an Express.js API to interact with a MySQL database using Sequelize. The goal is to provide the manager of an internet retail company with a back end that utilizes the latest technologies, enabling the company to compete effectively in the e-commerce market.

## Features

Using Insomnia or a similar app, you can interact with the server in the following ways:

- **View all Categories**: send a GET request with the endpoint of /api/categories/

- **View all Products**:  send a GET request with the endpoint of /api/products/

- **View all Tags**:  send a GET request with the endpoint of /api/tags/

- **View a Categories**:  send a GET request request with the endpoint of /api/categories/(category id)

- **View a Products**:  send a GET request with the endpoint of /api/products/(product id)

- **View a Tags**:  send a GET request with the endpoint of /api/tags/(tag id)

- **Add a Category**: send a POST request with the endpoint of /api/categories/ and the following req.body:
                      	
      {
        "category_name": "string"
      }

- **Add a Product**: send a POST request with the endpoint of /api/products/ and the following req.body:
                      	
      {
        "product_name": "string",
        "price": string,
        "stock": string,
		"category_id": integer,
		"tagIds": [integer]
      }

- **Add an Tag**: send a POST request with the endpoint of /api/tags/ and the following req.body:
                      	
      {
        "tag_name": "string"
      }

- **Update a Category** : send a PUT request with the endpoint of /api/categories/(category id) and the following req.body:
                      	
      {
        "category_name": "string"
      }

- **Update a Product**: send a PUT request with the endpoint of /api/products/(product id) and the following req.body:
                      	
      {
        "product_name": "string",
        "price": string,
        "stock": string,
			  "category_id": integer,
			  "tagIds": [integer]
      }


- **Update an Tag**: send a PUT request with the endpoint of /api/tags/(tag id) and the following req.body:
                      	
      {
        "tag_name": "string"
      }

- **Delete a Category**:  send a DELETE request request with the endpoint of /api/categories/(category id)

- **Delete a Product**:  send a DELETE request with the endpoint of /api/products/(product id)

- **Delete an Tag**:  send a DELETE request with the endpoint of /api/tags/(tag id)

## Demo

[Watch the backend in action!](https://drive.google.com/file/d/17UoeTxfSsOTY69NurHc8MS7biQZAFMrd/view?usp=sharing)

## Installation and Usage

To run the application:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Add your database name, MySQL username, and MySQL password to the .env file.
4. Use the schema.sql file in the db folder to create your database with MySQL shell commands.
5. Seed the data to your database using the following command: `npm run seed`
6. Start the server by running `node index.js` or `npm start` in the terminal.
7. Interact with the server using Insomnia REST to view, add, update, and delete.

## Technologies Used

- ![Static Badge](https://img.shields.io/badge/Node.js-darkgreen.svg?style=plastic)
- ![Static Badge](https://img.shields.io/badge/MySQL-orange.svg?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Sequelize-brown?style=plastic)

## GitHub
[Visit my GitHub Profile here!](https://github.com/CYCBrian)

## License
The project is covered under the following license:
[MIT](https://choosealicense.com/licenses/mit)

- - -
[Back to Top](#top)
- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.