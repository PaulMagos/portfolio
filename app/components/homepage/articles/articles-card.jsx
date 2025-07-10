// @flow strict

import * as React from 'react';

function ArticleCard({ article }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-6 py-8 lg:py-8 relative">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {article.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">@{article.type}{'{'}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">{article.citation}{`,`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-amber-300"><span className="text-white">title={'{'}</span>{article.name}{'},'}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">authors={'{'}</span>
            {
              article.authors.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}
                  {
                    article.authors?.length - 1 !== i && " and "
                  }
                  </span>
                </React.Fragment>
              ))
            }
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">abstract={"{"}</span>
            <span className="text-cyan-400">{article.abstract}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">journal={"{"}</span>
            <span className="text-white">{article.journal}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">year={"{"}</span>
            <span className="text-white">{article.year}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">doi={"{"}</span>
            <span className="text-red-400">{article.doi}</span>
            <span className="text-white">{"},"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">url={"{"}</span>
            <span className="text-blue-400"><a href={article.url}>{article.url}</a></span>
            <span className="text-white">{"},"}</span>
          </div>
          <div><span className="mr-2 text-pink-500">{`}`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ArticleCard;