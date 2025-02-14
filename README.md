# NeoByte-Task-4
Advanced API with CI/CD Pipeline and Automated Testing

This project is a RESTful API built with Express.js, Dockerized, and automated using a CI/CD pipeline via GitHub Actions. It supports CRUD operations, JWT-based authentication, and automated deployment to a staging environment. The API is designed to handle user management with endpoints for login and user creation, where access to protected routes is secured via JWT tokens.

To run the API locally without Docker, users need to install the necessary dependencies using npm install and start the server with node index.js, making it accessible at http://localhost:3000. Alternatively, the API can be run in a Docker container by building an image with docker build -t my-api . and launching it using docker run -p 3000:3000 my-api. Both methods expose the API on port 3000 for local testing.

The API includes two main endpoints: a POST /login route that issues a JWT token upon receiving a username and a protected POST /users route that requires the token for authorization to add users to an in-memory list. Users can test these endpoints using tools like Postman, providing the token as an authorization header to access protected routes.

A fully automated CI/CD pipeline is configured using GitHub Actions, which triggers on every push to the main branch. The pipeline consists of a build stage, where the code is checked out, dependencies installed, automated tests executed, and a Docker image built. In the deploy stage, the pipeline (currently a placeholder) simulates deployment to a staging environment. Users can view pipeline progress and logs directly in the Actions tab of their GitHub repository.

Once deployed to the staging environment, the API becomes accessible via a public URL. Users can interact with the deployed API using the same endpoints and token-based authentication. This project demonstrates the entire development lifecycle, from building and testing locally to automated deployment using containerization and CI/CD practices.
