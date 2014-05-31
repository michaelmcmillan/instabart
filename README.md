Instabart på Innsida
====================

## Filer
- index.html
- iframe.html
    + Brukt gjennom utviklingsfasen. Iframen har samme størrelse som en portlet på Innsida
- css/global.css
- css/global.scss
    + Ikke nødvendig, men kjekt hvis dere uansett bruker Sass.
- css/glyphicons.css
- fonts/glyphicons-regular.[eot|svg|ttf|woff]
- images/glyphicons-white.[png|svg]
    + Brukes ikke. Kun lagt ved i tilfelle andre ønsker å benytte seg av dem
- images/glyphicons.[png|svg]
    + Brukes ikke. Kun lagt ved i tilfelle andre ønsker å benytte seg av dem
- shorcut-[bartebuss|itslearning|software].png
    + Dette brukes som SVG fallback for å støtte Android 2.3
- js/modernizr.js
- js/analytics.js
    + OBS! IKKE EN DEL AV PROSJEKTET! Kun lagt ved som et eksempel på hvordan event tracking er gjennomført på Instabart.no


## Avhengigheter
I et forsøk på å gjøre integrasjon på Innsida enklest mulig, har jeg fjernet stort sett alle avhengigheter, inkludert javascript.

Modernizr.js er en avhengighet, men det brukes jo på Innsida allerede. Videre benytter prosjektet seg av Glyphions og FontAwesome (etter avtale med Christine Sætre).

## Nettleserstøtte
Jeg har forsøkt å teste koden på så mange nettlesere som mulig. Koden bør fungere på alle moderne nettlesere, samt IE9+. Android 2.3 skal i prinsippet være støttet, men det ser ut til å være et problem med SVG-fallbacken som jeg ikke har feilsøkt ennå.

## Spørsmål?
Kontakt meg på telefon (91833835) eller epost (morten.noddeland@ntnu.no)
