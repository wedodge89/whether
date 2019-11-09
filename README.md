# Whether
---
This web application uses three APIs (Open Weather, Poetry, and Bored), along with switch cases, to give users suggestions for music and activities based on the local weather. 

The user inputs their ZIP code (or, honestly, it could be any ZIP code, we won't rat them out). This triggers the Open Weather API to print the temperature and a brief description of the weather in that area. This also triggers a switch case, which changes the weather icon displayed and prints a Spotify playlist appropriate for that weather.

The weather description is also passed into the poetry API, which returns a poem based on the weather key word (e.g. sunny, clear, etc.).

Finally, the Bored API returns a random activity for the user to engage in to aleviate their boredom. 

**Note: Whether's developers are not responsible if you die because you decided to play golf in a thunderstorm, or in any other weather-related tragedy.**

Developers:
- Magen Bouchard
- Elliott Dodge
- Michael Munsey
- Sam Nee
- Jeff Poe