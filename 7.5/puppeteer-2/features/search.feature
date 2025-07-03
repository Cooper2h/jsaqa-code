Feature: Reserving tickets in "IdyomVKino"
    Scenario: Should reserve one ticket
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date
        When user choose movie time
        When user choose a seat
        When user click on the reserve button
        When user click on the get code button
        Then user get the code and text "Электронный билет"

        Scenario: Should reserve ticket and get a code
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date
        When user choose movie time
        When user choose another seat
        When user choose one more seat
        When user click on the reserve button
        When user click on the get code button
        Then user get the code and text "Электронный билет"

        Scenario: Should not be available button
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date
        When user choose movie time
        When user choose already selected seat
        Then button for reserving is inactive "true"