import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import * as pipelines from 'aws-cdk-lib/pipelines';
import {MyDevStage} from './stages/dev-stage'

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('anilah/my-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']

      })
    });

    pipeline.addStage(new MyDevStage(this, "test", {
      env: { account: "323619686659", region: "ap-southeast-2" }
    }),{
      pre: [
        new pipelines.ManualApprovalStep('PromoteToDev'),
      ],
    });


  }
}