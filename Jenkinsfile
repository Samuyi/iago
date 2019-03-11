pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs(nodeJSInstallationName: 'node', configId: 'node') {
          sh '''npm --version


'''
          sh '''node --version
'''
        }

      }
    }
  }
}