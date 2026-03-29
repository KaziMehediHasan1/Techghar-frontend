import { generateReactHelpers } from '@uploadthing/react';
import type { FileRouter } from 'uploadthing/server';

export type OurFileRouter = {
  imageUploader: FileRouter[string];
};

export const { useUploadThing } = generateReactHelpers<OurFileRouter>({
  url: `${import.meta.env.VITE_API_URL}/api/uploadthing`,
});

// ## 🗺️ আলাদা Repo হলে Flow এরকম

// frontend repo                backend repo
//      │                            │
//      │                            │
// uploadthing.ts              uploadthing.core.ts
// (নিজের type define)         (actual router)
//      │                            │
//      │    HTTP request            │
//      └──────────────────────────► /api/uploadthing
//                                   │
//                                   ▼
//                             UploadThing Cloud ✅
