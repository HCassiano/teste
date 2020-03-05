pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'chmod +x ./scripts/test.sh'
                sh './scripts/test.sh' 
                sh 'chmod -x ./scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod +x ./scripts/deliver.sh'
                sh 'chmod +x ./scripts/kill.sh'
                sh './scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './scripts/kill.sh'
                sh 'chmod -x ./scripts/deliver.sh'
                sh 'chmod -x ./scripts/kill.sh'
            }
        }
    }
}