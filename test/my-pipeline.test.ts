//import { expect as expectCDK, matchTemplate, MatchStyle } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as MyPipeline from '../lib/my-pipeline-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MyPipeline.MyPipelineStack(app, 'MyTestStack');
    // THEN
 //  expectCDK(stack).to(matchTemplate({
  //    "Resources": {}
   // }, MatchStyle.EXACT))
});
