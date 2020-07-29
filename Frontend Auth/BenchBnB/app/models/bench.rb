class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    has_one_attached :photo

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:northEast][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:southEast][:lng])
    end

end