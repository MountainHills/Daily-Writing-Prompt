// This is the data for the application.
const ON_LANDING_PAGE = true;
let character = [];
let setting = [];
let plot = [];

// Data entry

// --> Character
character.push("Arrogant Young Master");
character.push("Poor Hardworking Protagonist");
character.push("Unlucky Lucky Protagonist");
character.push("Unsuspicious Genious Detective");
character.push("Scummy Businessman");
character.push("Disclpined SWAT Soldier");
character.push("Hidden-Identity Noble");
character.push("Lazy Ambitious Man")
character.push("Rock man");
character.push("Daughter of a caring Father.");
character.push("Hidden mage");
character.push("Assassin");
character.push("Spirit Farmer");

// --> Setting
setting.push("Ancient Cultivation China");
setting.push("Technologically Advanced Greek Mythology");
setting.push("Ancient Colliseum");
setting.push("Contemporary Science and Magic World");
setting.push("Iron Age");
setting.push("A new settlement in the Forest");
setting.push("The ungrowing abandoned village");
setting.push("The land where the sun doesn't appear");
setting.push("A place surrounded by fog.");
setting.push("Slum areas");

// --> Plot
plot.push("The main character has a system that enables him to see the max skill ceiling of every individual.");
plot.push("Reaching an important tombstone");
plot.push("Reaching the last bit of potable water in the world.");
plot.push("The main character is confused in a delirium fighting his own demons.");
plot.push("Saving the last person who would save the world.");
plot.push("Training to be at the top");
plot.push("Reaching the skies to smite the Gods");
plot.push("Goes back in time to get an important item");
plot.push("Goes to an alternate reality to drink soda.");
plot.push("Escaping the village");
plot.push("Fixing an item");
plot.push("Reaching an important place.");
plot.push("Cooking the perfect food.");
plot.push("Looking for a sign (a literal sign, a symbol, or event.)");
plot.push("Preparing a meal.");

// Get random numbers for the plot.

// Functions
// Gets a random index depending on the size of the array.
function randomizer(arr)
{
    let randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

// Creates a random propmpt.
function randomPrompt()
{
    document.getElementById("character").innerHTML = character[randomizer(character)];
    document.getElementById("setting").innerHTML = setting[randomizer(setting)];
    document.getElementById("plot").innerHTML = plot[randomizer(plot)];
}

// Resets the boxes containing the prompt.
function reset()
{
    document.getElementById("character").innerHTML = "";
    document.getElementById("setting").innerHTML = "";
    document.getElementById("plot").innerHTML = "";
}