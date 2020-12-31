function Decrypt(key: string, file: File) : File|Error {
  if (key.length > 5) {
    // Should decrypt a file 
  } else { 
    return new Error("Password does not meet minimal requiremets ")
  }
}