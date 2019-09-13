class CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = Character.create(char_params)
    end

    private

    def char_params
        params.require(:character).permit(:name,:style,:race,:prof,:str,:dex,:fort,:wis)
    end
end
