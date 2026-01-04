pipeline {
  agent any

  environment {
    IMAGE = "pritxbat/password-generator-react"
  }


  stages {

    stage('Install Dependencies') {
      steps { bat 'npm ci' }
    }

     stage('SonarCloud Analysis') {
      steps {
        withSonarQubeEnv('sonarcloud') {
          bat '''
          sonar-scanner \
            -Dsonar.projectKey=pritxbat_Password-Generator-React \
            -Dsonar.organization=pritxbat \
            -Dsonar.sources=src
          '''
        }
      }
    }

    stage('Build') {
      steps { bat 'npm run build' }
    }

    stage('Docker Build') {
      steps { bat "docker build -t $IMAGE:$BUILD_NUMBER ." }
    }

    stage('Docker Pubat') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {
          bat '''
          echo $P | docker login -u $U --password-stdin
          docker pubat $IMAGE:$BUILD_NUMBER
          '''
        }
      }
    }
  }
}
