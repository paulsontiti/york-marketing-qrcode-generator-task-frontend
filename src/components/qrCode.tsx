"use client";
import Image from "next/image";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const generateQR = async (url: string) => {
  try {
    return await QRCode.toDataURL(url);
  } catch (err) {
    console.error(err);
  }
};

const generateTenRandomUnigueNumbers = (count: number): number[] => {
  const numbers: number[] = [];

  while (true) {
    const num = Math.floor(Math.random() * count) + 1;

    const index = numbers.indexOf(num);

    if (index < 0) {
      numbers.push(num);
    }

    if (numbers.length === 10) {
      break;
    }
  }
  return numbers;
};

export default function QRCodeComponent() {
  const [src, setSrc] = useState("");
  
  const nums = generateTenRandomUnigueNumbers(16);
  
  const [randomNumbers, setRandomNumbers] = useState(nums.join(","));

  useEffect(() => {
    (async () => {
      const src = await generateQR(
        `https://york-marketing-qrcode-generator.vercel.app/movies/${randomNumbers}`
      );
      setSrc(src || "");
    })();

    const interval = setInterval(() => {
      const nums = generateTenRandomUnigueNumbers(16);
      setRandomNumbers(nums.join());
    }, 10000);

    // Cleanup logic (unmount)
    return () => {
      clearInterval(interval);
    };
  }, [randomNumbers]);

  return (
    <div className="w-96 h-96 absolute">
      {src && (
        <Image
          className="dark:invert"
          src={src || ""}
          alt="Next.js logo"
          fill
          priority
        />
      )}
    </div>
  );
}
