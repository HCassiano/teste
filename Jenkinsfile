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
                sh 'chmod +x ./test/test.sh'
                sh './test/test.sh' 
                sh 'chmod -x ./test/test.sh'
            }
        }
    }
}