export default function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="py-2 px-3 shrink-0 rounded-full bg-[#B7FF00] text-xs font-medium text-black"
    >
      {text}
    </button>
  );
}
