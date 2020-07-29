class API::BenchesController < ApplicationController

    def index
      @benches = bounds ? Bench.in_bounds(params(:bounds)) : Bench.all
      
      if params[:minSeating] && params[:maxSeating]
        benches = benches.where(seating: seating_range)
      end

      render :index
    end

    def create
        @bench = Bench.create!(bench_params)
        render :show
    end

    private

    def seating_range
      (params[:minSeating]..params[:maxSeating])
    end
    
    def bench_params
        params.require(:bench).permit(
            :description,
            :lat,
            :lng,
            :seating,
            :photo, 
            :max_seating, 
            :min_seating
        )
    end

end