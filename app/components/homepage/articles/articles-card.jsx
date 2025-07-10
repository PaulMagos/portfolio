// @flow strict
import * as React from 'react';

function ArticleCard({ article }) {
  const pdfPath = `/papers/${article.citation}.pdf`;

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
      <div className="w-full lg:w-1/2 h-[500px] border-l border-indigo-900 pl-4">
        <iframe
          src={`${pdfPath}#page=1`}
          title="PDF preview"
          className="w-full h-full rounded"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
