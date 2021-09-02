import React, { FunctionComponent } from "react";

type Metric = {
  count: number;
  maybeMore: boolean;
};

type Props = {
  stats: {
    prsCreated: Metric;
    prsMerged: Metric;
    contributors: Metric;
  };
};

function formatMetric(metric: Metric) {
  if (metric.maybeMore) {
    if (metric.count > 20) {
      return Math.floor(metric.count / 10) * 10 + "+";
    } else {
      return metric.count + "+";
    }
  }
  return metric.count;
}

const RepoStats: FunctionComponent<Props> = ({ stats }) => {
  return (
    <div className="bg-white p-4 flex-shrink">
      <h2 className="text-sm font-bold text-black-500 mb-4">Last 30 days</h2>
      <div className="flex justify-between text-black-500 space-x-4 text-center">
        <div>
          <div className="text-3xl font-bold">
            {formatMetric(stats.prsCreated)}
          </div>
          <small className="text-xs uppercase whitespace-nowrap">
            PRs opened
          </small>
        </div>
        <div>
          <div className="text-3xl font-bold">
            {formatMetric(stats.prsMerged)}
          </div>
          <small className="text-xs uppercase whitespace-nowrap">
            PRs merged
          </small>
        </div>
        <div>
          <div className="text-3xl font-bold">
            {formatMetric(stats.contributors)}
          </div>
          <small className="text-xs uppercase whitespace-nowrap">
            Contributors
          </small>
        </div>
      </div>
    </div>
  );
};

export default RepoStats;
