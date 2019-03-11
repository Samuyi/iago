pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                git clone git@github.com:Samuyi/iago.git
                cd iago
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
