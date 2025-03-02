const AvatarIcon = ({ className }: { className: string }) => {
  return (
    <svg className={`rounded-full bg-[#e7f0ff] fill-[#a8caff] ${className}`} viewBox="0 0 48 48">
      <path d="M24,12 C28.418278,12 32,15.581722 32,20 L32,22 C32,26.418278 28.418278,30 24,30 C19.581722,30 16,26.418278 16,22 L16,20 C16,15.581722 19.581722,12 24,12 Z M24,32 C33.8734019,32 42.1092023,38.8710577 44,48 L4,48 C5.89079771,38.8710577 14.1265981,32 24,32 Z"></path>
    </svg>
  );
};

export default AvatarIcon;
