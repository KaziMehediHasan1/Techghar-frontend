import { IconBundler } from "@/assets/icons/IconBundler";

function Home() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-orange-primary">AI Product Onboarding</h1>

      <textarea
        placeholder="AI generated description..."
        className="border-2 border-amber-300 p-2 w-full h-32"
        readOnly
      />

      <div className="font-semibold text-gray-500">Tags: No tags generated</div>

      <div className="flex flex-col gap-2">
        <label className="font-medium ">Upload Product Image:</label>
        <input
          type="file"
          accept="image/*"
          className="file:mr-4 file:py-2 file:px-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
        />
      </div>
      <IconBundler.SliderH className="w-10 h-10 text-primary" />

      <div className="flex items-center gap-2 text-amber-600">
        <span className="animate-spin text-xl">⏳</span>
        <p>Gemini is analyzing your image...</p>
      </div>
    </div>
  );
}

export default Home;
