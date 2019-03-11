pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'git clone https://github.com/Samuyi/iago.git'
                dir ('iago'){ 
                npm install
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                dir('iago') {
                npm test
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
};
