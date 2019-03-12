pipeline {
  agent any
  stages {
    stage('build and test') {
      agent {
        node {
          label 'jenkins docker agants'
        }

      }
      steps {
        sh 'echo \'building script\''
        dir(path: '/var/jenkins_home/workspace/iago/iago/') {
          sh 'npm install'
          sh 'npm test'
        }

      }
    }
    stage('deploy') {
      steps {
        sh 'echo \'done\''
      }
    }
  }
}