// @flow strict
"use client";
import * as React from 'react';
import { MdDownload } from "react-icons/md";
import Link from "next/link";
import Image from 'next/image';

function ArticleCard({ article }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      
      {/* Top colored bars */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window bar */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {article.name}
        </p>
      </div>

      {/* Main content */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex flex-col gap-6">

        {/* Row 1: Thumbnail + BibTeX */}
        <div className="flex flex-row lg:flex-row w-full gap-6">
          {/* Thumbnail */}
          <div className="w-full w-1/4 flex justify-center items-start pt-2">
            <Link href={article.pdfUrl} target="_blank">
              <Image
                src={`/papers/${article.citation}.${article.thumbnailFormat}`}
                alt={article.citation}
                width={150}
                height={300}
              />
            </Link>
          </div>

          {/* BibTeX */}
          <div className="overflow-auto border-indigo-900 pr-2 w-full">
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
                {article.authors.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}
                      {article.authors.length - 1 !== i && " and "}
                    </span>
                  </React.Fragment>
                ))}
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
        </div>

        {/* Row 2: Download button */}
        <div className="w-full flex justify-center">
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
}

export default ArticleCard;
