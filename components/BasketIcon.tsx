import Image from "next/image";

interface BasketIconProps {
  size?: number;
  className?: string;
}

export default function BasketIcon({ size = 80, className = "" }: BasketIconProps) {
  return (
    <div className={`mx-auto ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/Green_Basket_Icon.png"
        alt="Shopping Basket"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
