pipeline {
    agent any

    environment {
        KUBECONFIG = '/var/lib/jenkins/.kube/config'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudreal-app:v1 .'
            }
        }

        stage('Load Image To Minikube') {
            steps {
                sh 'minikube image load cloudreal-app:v1'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get deployments'
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}
