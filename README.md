import { getApiKey } from "../getApiKey/getApiKey";
import { run, subscribe } from "../runCode/runCode";
import { storeCode } from "../storeCode/storeCode";
import { CodeFile, GenerateCodeResponse } from "./types";

const INSERT_TOKEN = "<insert>";

export const generateCode = async (
  codeFiles: CodeFile[],
  entryFileName: string
): Promise<GenerateCodeResponse> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return {
      success: false,
      message: "No API key found.",
    };
  }

  const modifiedCodeFiles = await Promise.all(
    codeFiles.map(async (codeFile) => {
      if (codeFile.fileName === entryFileName) {
        const code = codeFile.code;
        const index = code.indexOf(INSERT_TOKEN);
        if (index === -1) {
          return {
            ...codeFile,
            code: `${code}\nconsole.log("Hello World");`,
          };
        }

        return {
          ...codeFile,
          code: `${code.substring(
            0,
            index
          )}console.log("Hello World");${code.substring(index)}`,
        };
      }

      return codeFile;
    })
  );

  await storeCode(modifiedCodeFiles);

  return {
    success: true,
    message: "Code generated successfully.",
  };
};
