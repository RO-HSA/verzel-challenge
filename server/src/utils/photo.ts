import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const client = new S3Client({
  region: "sa-east-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "sa-east-1" },
    identityPoolId: "sa-east-1:60f728d9-aa2c-40e1-84d0-0ca3531ec6d7",
  }),
});

export const deletePhoto = async (url: string) => {
    const key = url.split("amazonaws.com/")[1]

    const command = new DeleteObjectCommand({
        Bucket: "verzel-challenge",
        Key: key,
    })

    await client.send(command)
}