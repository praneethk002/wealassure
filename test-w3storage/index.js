const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGREN0EzNjI5MkE4NTAyZjRhYWIyMzBhNDAxMkM1QjgyNGRhZTJhN2YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzU1MzMwNTIzMTksIm5hbWUiOiJIZWFsT0NvZGUifQ.cPDhKmCworB7ykWXeCn5oyyvAbx2FDxkB0MentXtINU";

const { Web3Storage } = require("web3.storage");

function getAccessToken() {
  return token;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

const { File } = require("web3.storage");

// async function getFiles (path) {
//   const files = await getFilesFromPath(path)
//   console.log(`read ${files.length} file(s) from ${path}`)
//   return files
// }

async function storeFile() {
  // You can create File objects from a Buffer of binary data
  // see: https://nodejs.org/api/buffer.html
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  console.log("Trying to store files");
  const obj = { hello: "world" };
  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [new File([buffer], "hello.json")];
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

async function main() {
  const response = await storeFile();
}

main();
