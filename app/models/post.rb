class Post < ApplicationRecord
    validates :title, :content, presence: true

    def self.search_post(content)
        self.all.select {|post| ( post.title.include?(content) || post.content.include?(content) ) }
    end
end
