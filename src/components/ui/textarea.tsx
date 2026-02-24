import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-lg border bg-[#f8fafc] px-4 py-3 text-base outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:ring-[3px] focus-visible:bg-white",
        "hover:border-muted-foreground/30",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
