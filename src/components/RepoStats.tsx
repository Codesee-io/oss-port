import React, { FunctionComponent } from "react";

type Props = {
  stats: {
    prsCreated: {
      count: number;
      maybeMore: boolean;
    };
    prsMerged: {
      count: number;
      maybeMore: boolean;
    };
    contributors: {
      count: number;
      maybeMore: boolean;
    };
  };
};

const RepoStats: FunctionComponent<Props> = ({ stats }) => {
  return (
    <div className="bg-white p-4 flex-shrink">
      <h2 className="text-sm font-bold text-black-500 mb-4">Last 30 days</h2>
      <div className="flex justify-between text-black-500 space-x-4 text-center">
        <div>
          <div className="text-3xl font-bold">{stats.prsCreated.count}</div>
          <small className="text-xs uppercase whitespace-nowrap">
            PRs opened
          </small>
        </div>
        <div>
          <div className="text-3xl font-bold">{stats.prsMerged.count}</div>
          <small className="text-xs uppercase whitespace-nowrap">
            PRs merged
          </small>
        </div>
        <div>
          <div className="text-3xl font-bold">{stats.contributors.count}</div>
          <small className="text-xs uppercase whitespace-nowrap">
            Contributors
          </small>
        </div>
      </div>
    </div>
  );
};

export default RepoStats;
