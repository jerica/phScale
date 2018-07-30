class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :number
      t.string :email
      t.string :contact
      t.string :website
      t.string :score
      t.text :selected_answers
      t.text :description

      t.timestamps null: false
    end
  end
end
