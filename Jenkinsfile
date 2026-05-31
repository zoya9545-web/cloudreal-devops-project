pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Code already checked out from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloudreal-app:v1 .'
            }
        }

        stage('Verify Docker Image') {
            steps {
                sh 'docker images | grep cloudreal-app'
            }
        }
    }
}
