import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import {s3Stack} from '../s3-stack';

export class MyDevStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);

      const lambdaStack = new s3Stack(this, 's3Stack');
    }
}