import { PORT } from "../config/server";

function Encrypt(key: string, file: File): File | Error { 
  if (key.length > 5) {
    //then should encrypt file
  } else { 
    return new Error("Password does not meet minimal requiremets ")
  }
}