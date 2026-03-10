interface StoryCardProps {
  title: string;
  author: string;
  monogram: string;
  excerpt?: string;
  readTime?: string;
  className?: string;
  variant?: "large" | "medium" | "small";
}

const StoryCard = ({ title, author, monogram, excerpt, readTime, className = "", variant = "medium" }: StoryCardProps) => {
  return (
    <article className={`group cursor-pointer border border-border p-6 transition-colors duration-300 hover:border-primary/40 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="monogram flex h-10 w-10 items-center justify-center border border-border text-sm text-foreground">
          {monogram}
        </span>
        <div>
          <p className="font-body text-sm text-foreground">{author}</p>
          {readTime && <p className="text-xs text-muted-foreground">{readTime}</p>}
        </div>
      </div>
      <h3 className={`font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300 ${variant === "large" ? "text-3xl mb-4" : variant === "medium" ? "text-2xl mb-3" : "text-xl mb-2"}`}>
        {title}
      </h3>
      {excerpt && (
        <p className="font-body text-secondary leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      )}
    </article>
  );
};

export default StoryCard;
