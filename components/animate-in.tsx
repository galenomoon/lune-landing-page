"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

export default function AnimateIn({
  children,
  delay = 0,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, scale: 0, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateImage({
  delay = 0,
  ...imageProps
}: ImageProps & {
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={{ display: "inline-block" }}
    >
      <Image {...imageProps} alt={imageProps.alt || ""} />
    </motion.div>
  );
}
