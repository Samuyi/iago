pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'git clone https://github.com/Samuyi/iago.git'
                sh 'cd iago'
                npm install
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                npm test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
};
