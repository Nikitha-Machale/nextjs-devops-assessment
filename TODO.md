# DevOps Internship Assessment - TODO List

## 1. Set Up the Project Structure
- [x] Initialize Next.js application with `npx create-next-app@latest .`
- [x] Install dependencies and verify app runs locally

## 2. Create Dockerfile
- [x] Write multi-stage Dockerfile with Node.js build stage and Alpine runtime
- [x] Implement best practices: non-root user, minimal layers, caching
- [x] Expose port 3000

## 3. Set Up GitHub Actions Workflow
- [x] Create `.github/workflows/ci-cd.yml`
- [x] Configure workflow for push to main branch
- [x] Add steps: checkout, setup Docker Buildx, login to GHCR, build and push image

## 4. Create Kubernetes Manifests
- [x] Create `k8s/` directory
- [x] Create `k8s/deployment.yaml` with 2 replicas, health checks, resource limits
- [x] Create `k8s/service.yaml` to expose the application

## 5. Write README.md Documentation
- [x] Write comprehensive README with all required sections
- [x] Include setup instructions, local run commands, deployment steps

## 6. Initialize Git Repository and Push to GitHub
- [x] Initialize Git repo
- [x] Create public GitHub repository
- [x] Push all code and verify GitHub Actions

## 7. Test Deployment on Minikube
- [ ] Set up Minikube locally (requires admin privileges, installation failed)
- [ ] Apply Kubernetes manifests
- [ ] Verify deployment and access application

## 8. Submission
- [x] Prepare email with repository URL and GHCR image URL
