pipeline {
  agent {
    dockerfile true
  }

  stages {
    stage('Initialize') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'gulp test'
      }
    }
    stage('Convergence Testing') {
      steps {
        parallel (
          firefox: {
            echo "Firefox Testing"
          },
          Chrome: {
            echo "Chrome Testing"
          },
          IE: {
            echo "IE Testing"
          },
          Mobile: {
            echo "Mobile Testing"
          }
        )
      }
    }
    stage('Build') {
      steps {
        sh 'gulp package-app'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
}
