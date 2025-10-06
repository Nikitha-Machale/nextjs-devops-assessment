# Next.js DevOps Assessment

## Project Overview
This project is a simple Next.js application containerized using Docker, with automated CI/CD using GitHub Actions, and deployed to Kubernetes (Minikube).

## Prerequisites
- Node.js and npm installed
- Docker installed and running
- GitHub account with access to GitHub Container Registry (GHCR)
- Minikube installed and running
- kubectl installed and configured

## Local Development Setup
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Docker Build and Run Instructions
1. Build the Docker image:
   ```
   docker build -t nextjs-devops-assessment .
   ```
2. Run the Docker container:
   ```
   docker run -p 3000:3000 nextjs-devops-assessment
   ```
3. Access the app at [http://localhost:3000](http://localhost:3000)

## GitHub Actions CI/CD
- On push to the `main` branch, the workflow builds the Docker image and pushes it to GitHub Container Registry (GHCR).
- The image is tagged with the commit SHA and `latest`.

## Kubernetes Deployment to Minikube
1. Start Minikube:
   ```
   minikube start
   ```
2. Apply Kubernetes manifests:
   ```
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```
3. Access the service:
   ```
   minikube service nextjs-service
   ```

## Accessing the Deployed Application
- Use the URL provided by `minikube service nextjs-service` command to access the app in your browser.

## Repository and Image URLs
- Repository URL: https://github.com/Nikitha-Machale/nextjs-devops-assessment
- GHCR Image URL: ghcr.io/nikitha-machale/nextjs-devops-assessment:latest

## Notes
- Replace `[your-username]` with your GitHub username in Kubernetes manifests and README.
- Ensure GitHub Actions secrets and permissions are properly configured for GHCR access.
