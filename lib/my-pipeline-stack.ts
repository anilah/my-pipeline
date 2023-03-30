import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';


export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('anilah/my-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']

    /** 
    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('anilah/my-pipeline', 'main', {
        connectionArn: 'arn:aws:codestar-connections:ap-southeast-2:323619686659:connection/1645fd72-c2a7-4c45-8fac-23695dc7806a', // Created using the AWS console * });',
       }),
      
        commands: [ 'npm ci','npm run build', 'npx cdk synth']
       // commands: ['npm ci', 'npm run build', 'npx cdk synth'],
        buildEnvironment: {
          environmentVariables: {
            'GITHUB_AUTH_TOKEN': {
              
              //value: `${githubSecretArn.stringValue}:pat`,
              value : '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:pat',
              type: codebuild.BuildEnvironmentVariableType.SECRETS_MANAGER
            }
          }
          */
     })
    });
  }
}