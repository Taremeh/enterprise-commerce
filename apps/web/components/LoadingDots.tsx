import { cn } from "utils/cn"

export default function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center space-x-0.5 bg-white", className)}>
      <span className="sr-only">Loading...</span>
      <div className="size-1.5 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.3s]"></div>
      <div className="size-1.5 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.15s]"></div>
      <div className="size-1.5 animate-bounce rounded-full bg-gray-300"></div>
    </div>
  )
}