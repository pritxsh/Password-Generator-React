pipeline {
  agent any

  environment {
    IMAGE = "pritxsh/password-generator-react"
  }

  stages {

    stage('Install') {
      steps {
        nodejs('node18') {
          sh 'npm ci'
        }
      }
    }

    stage('Analyze') {
  steps {
    withSonarQubeEnv('sonarcloud') {
      sh "${tool 'sonar-scanner'}/bin/sonar-scanner"
    }
  }
}

    stage('Build') {
      steps {
        nodejs('node18') {
          sh 'npm run build'
        }
      }
    }

    stage('Package') {
      steps {
        sh "docker build -t $IMAGE:$BUILD_NUMBER ."
      }
    }

    stage('Publish') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {
          sh """
          echo $P | docker login -u $U --password-stdin
          docker push $IMAGE:$BUILD_NUMBER
          """
        }
      }
    }
  }
}
