import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const client = new S3Client({
  region: "sa-east-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "sa-east-1" },
    identityPoolId: "sa-east-1:60f728d9-aa2c-40e1-84d0-0ca3531ec6d7",
  }),
});

export const uploadPhoto = async (photo: FileList | null) => {
  if (photo) {
    const date = Date.now();
    const key = `${date}-${photo[0].name}`;
    const command = new PutObjectCommand({
      ACL: "public-read",
      Bucket: "verzel-challenge",
      Key: key,
      Body: photo[0],
    });

    await client.send(command);

    const imageUrl = `https://${command.input.Bucket}.s3.sa-east-1.amazonaws.com/${command.input.Key}`;
    return imageUrl;
  }
};
