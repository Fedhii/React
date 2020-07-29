class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.float :lat
      t.float :lng
      t.integer :seating, default: 2, null: false
      t.string :picture_url

      t.timestamps
    end
  end
end
