import React from 'react';

import BenchMap from '../bench_map/bench_map';

const BenchShow = ({ bench, benchId, fetchBench, reviews }) => {
  const benches = {
    [benchId]: bench
  };

  return(
    <div className="single-bench-show">
      <div className="singe-bench-map">
        <Link to="/">Back to Benches Index</Link>
        <BenchMap
          benches={benches}
          benchId={benchId}
          singleBench={true}
          fetchBench={fetchBench}
        />
      </div> 
      <div className="right-half bench-details">
        <BenchDetail bench={bench} reviews={reviews} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/benches/${benchId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/benches/:benchId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default BenchShow;