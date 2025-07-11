// @flow strict
"use client";
import * as React from 'react';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { useEffect, useState } from "react";

function useResponsiveScale() {
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setScale(0.5);
      } else if (width < 1224) {
        // tablet
        setScale(0.8);
      } else {
        // desktop
        setScale(1.2);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}

function ArticleCard({ article }) {
  const pdfPath = `/papers/${article.citation}.pdf`;
  const scale = useResponsiveScale(); 
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-4">
      
      {/* Left side: BibTeX */}
      <div className="w-full lg:w-1/2 overflow-auto border-r border-indigo-900 pr-4">
        <p className="text-center text-[#16f2b3] text-base lg:text-xl mb-4">
          {article.name}
        </p>
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">@{article.type}{'{'}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">{article.citation},{' '}</span>
          </div>
          <div className="ml-4">
            <span className="text-amber-300"><span className="text-white">title={'{'}</span>{article.name}{'},'}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">authors={'{'}</span>
            {
              article.authors.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}
                    {article.authors.length - 1 !== i && " and "}
                  </span>
                </React.Fragment>
              ))
            }
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">abstract={'{'}</span>
            <span className="text-cyan-400">{article.abstract}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">journal={'{'}</span>
            <span className="text-white">{article.journal}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">year={'{'}</span>
            <span className="text-white">{article.year}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">doi={'{'}</span>
            <span className="text-red-400">{article.doi}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4">
            <span className="text-white">url={'{'}</span>
            <span className="text-blue-400"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></span>
            <span className="text-white">{"},"}</span>
          </div>
          <div>
            <span className="mr-2 text-pink-500">{"}"}</span>
          </div>
        </code>
      </div>

      {/* Right side: PDF preview */}
      
      {/* Right side: PDF preview + download */}
      <div className="w-full lg:w-1/2 pl-4 flex flex-col justify-between">
        {/* PDF container with fixed height */}
        <div className="h-[500px] lg:h-[800px] overflow-hidden relative">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <Viewer
              fileUrl={pdfPath}
              renderPage={(props) =>
                props.pageIndex === 0 ? props.canvasLayer.children : null
              }
              defaultScale={scale}
              theme={{
                pageContainer: { margin: 0, padding: 0 },
              }}
            />
          </Worker>
        </div>

        {/* Download button */}
        <div className="mt-4 flex justify-center">
          <Link
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            target="_blank"
            href={article.pdfUrl}
            download
          >
            <span>Download PDF</span>
            <MdDownload size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ArticleCard;
