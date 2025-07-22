"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import DOMPurify from "isomorphic-dompurify";

interface DescriptionData {
  data: string;
}

const DescriptionShort = ({ data }: DescriptionData) => {
  const [show, setShow] = useState<boolean>(false);
  const [shouldShowToggle, setShouldShowToggle] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const MAX_HEIGHT = 200;

  const checkContentHeight = useCallback(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShouldShowToggle(contentHeight > MAX_HEIGHT);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(checkContentHeight, 0);

    return () => clearTimeout(timeoutId);
  }, [data, checkContentHeight]);

  const handleToggle = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <div className="px-7 py-4 bg-[#f8f8f8] mt-2 overflow-hidden">
      <div
        ref={contentRef}
        className={`transition-all duration-300 ${
          shouldShowToggle && !show ? "max-h-[200px] overflow-hidden" : "h-auto"
        }`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data),
        }}
      />

      {shouldShowToggle && (
        <div className="flex items-center justify-center mt-2">
          <span
            className="text-[#82869e] text-xs cursor-pointer hover:text-[#6b7280] transition-colors duration-200"
            onClick={handleToggle}
          >
            {show ? "Rút ngắn" : "Xem thêm"}
          </span>
        </div>
      )}
    </div>
  );
};

export default DescriptionShort;
