import { generateReactHelpers } from '@uploadthing/react';
import type { FileRouter } from 'uploadthing/server';

export type OurFileRouter = {
  imageUploader: FileRouter[string];
};

export const { useUploadThing } = generateReactHelpers<OurFileRouter>({
  url: `${import.meta.env.VITE_UPLOADTHING_ENDPOINT}/api/uploadthing`,
});


// frontend repo                backend repo
//      │                            │
//      │                            │
// uploadthing.ts              uploadthing.core.ts
//      type define)         (actual router)
//      │                            │
//      │    HTTP request            │
//      └──────────────────────────► /api/uploadthing
//                                   │
//                                   ▼
//                             UploadThing Cloud 
