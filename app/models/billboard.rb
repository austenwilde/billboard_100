class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy
  validates :title, presence: true
  validates :title, length: { minimum: 2 }
end
