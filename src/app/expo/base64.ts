 export function convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      // Lorsque la lecture du fichier est terminée
      fileReader.onload = () => {
        // Résoudre la promesse avec la chaîne Base64
        resolve(fileReader.result as string);
      };

      // Si une erreur survient pendant la lecture
      fileReader.onerror = (error) => {
        reject(error);
      };

      // Lire le fichier en Base64
      fileReader.readAsDataURL(file);
    });
  }