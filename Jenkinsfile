pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                dir ('/var/jenkins_home/workspace/iago_master'){ 
                npm install
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                dir('/var/jenkins_home/workspace/iago_master') {
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
