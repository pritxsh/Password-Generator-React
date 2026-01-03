pipeline {
  agent any

  environment {
    IMAGE = "pritxsh/password-generator-react"
  }


  stages {

    stage('Install') {
      steps { sh 'npm ci' }
    }

     stage('SonarCloud Analysis') {
      steps {
        withSonarQubeEnv('sonarcloud') {
          sh '''
          sonar-scanner \
            -Dsonar.projectKey=pritxsh_Password-Generator-React \
            -Dsonar.organization=pritxsh \
            -Dsonar.sources=src
          '''
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
