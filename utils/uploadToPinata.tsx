import axios from "axios";

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      trait_type: "Ticket",
      value: "Regular",
    },
  ],
};

export async function uploadToPinata(
  selectedFiles: [any],
  name: string,
  description: string
) {
  try {
    const data = new FormData();
    data.append("file", selectedFiles[0], selectedFiles[0].value);
    const result = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MzdjYWM4Zi0wNWEyLTQ3MjgtYTI0MS1lYmI3M2E5NzZjZmQiLCJlbWFpbCI6ImhhY2thdGhvbi1sdWtlQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjJhMTlhMDBhYjk3YmVlMTZjNWRlIiwic2NvcGVkS2V5U2VjcmV0IjoiYjRiMzA3ZmQxYTU0ZWQ5NWVmNTljYzM2ZWJmZWNjYmUxYWZmYjUwY2RlNzViNmU1ZDRmYWQ0OTE2OWM1MGFkMCIsImlhdCI6MTY2MzUwMDgzNn0.KMSzkjRbD_lckWFlUFTq0G9nes8oaGHibOt1On8g6Mo",
        },
      }
    );

    let tokenUriMetadata = { ...metadataTemplate };
    tokenUriMetadata.image = `https://ipfs.io/ipfs/${result.data.IpfsHash}`;
    tokenUriMetadata.name = name;
    tokenUriMetadata.description = description;
    console.log(result);
    const resultMetadata = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      tokenUriMetadata,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MzdjYWM4Zi0wNWEyLTQ3MjgtYTI0MS1lYmI3M2E5NzZjZmQiLCJlbWFpbCI6ImhhY2thdGhvbi1sdWtlQGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjJhMTlhMDBhYjk3YmVlMTZjNWRlIiwic2NvcGVkS2V5U2VjcmV0IjoiYjRiMzA3ZmQxYTU0ZWQ5NWVmNTljYzM2ZWJmZWNjYmUxYWZmYjUwY2RlNzViNmU1ZDRmYWQ0OTE2OWM1MGFkMCIsImlhdCI6MTY2MzUwMDgzNn0.KMSzkjRbD_lckWFlUFTq0G9nes8oaGHibOt1On8g6Mo",
        },
      }
    );
    return resultMetadata;
  } catch (error) {
    //  Handle error
    console.log(error);
    return undefined;
  }
}
