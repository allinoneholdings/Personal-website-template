import ImageKit from "imagekit";
import type { Express } from "express";

const imageKitInstance =
  process.env.IMAGEKIT_PUBLIC_KEY &&
  process.env.IMAGEKIT_PRIVATE_KEY &&
  process.env.IMAGEKIT_URL_ENDPOINT
    ? new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      })
    : null;

export const uploadImage = async (file: Express.Multer.File) => {
  if (!imageKitInstance) {
    return null;
  }

  return imageKitInstance.upload({
    file: file.buffer,
    fileName: `${Date.now()}-${file.originalname}`,
  });
};