module Main exposing (..)

import Html exposing (..)


type alias Model =
    { userName : String
    , clientId : String
    }


main : Program (Maybe Model) Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }


init savedModel =
    Maybe.withDefault { userName = "anon", clientId = "" } savedModel ! []


view : Model -> Html Msg
view model =
    div []
        [ text "hi there!!!"
        , text model.userName
        ]


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []
