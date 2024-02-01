import { cn } from "@/lib/utils";

type PageTitleProps = {
    title: string;
    className?: string;
}

const PageTitle = ( { title, className }: PageTitleProps ) => {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{ title }</h2>
  )
}

export default PageTitle