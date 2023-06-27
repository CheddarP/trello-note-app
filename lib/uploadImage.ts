import { ID, storage } from '@/appwrite';

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    '64737d8cdf0b7cb59062',
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
