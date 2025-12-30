pipeline {
  agent any

  environment {
    IMAGE = "pritxsh/password-generator-react"
  }

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/pritxsh/Password-Generator-React.git'
      }
    }

    stage('Install') {
      steps { sh 'npm ci' }
    }

    stage('SonarCloud') {
      steps {
        withSonarQubeEnv('sonarcloud') {
          sh 'sonar-scanner'
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Docker Build') {
      steps { sh "docker build -t $IMAGE:$BUILD_NUMBER ." }
    }

    stage('Docker Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {
          sh '''
          echo $P | docker login -u $U --password-stdin
          docker push $IMAGE:$BUILD_NUMBER
          '''
        }
      }
    }
  }
}
