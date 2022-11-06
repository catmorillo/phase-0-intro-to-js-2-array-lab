const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{cats.push(name)

}; 

function destructivelyPrependCat(name)
{cats.unshift(name)

};
function destructivelyRemoveLastCat(name)
{cats.pop(name)

};

function destructivelyRemoveFirstCat(name)
{cats.shift(name)

};

function appendCat(name) 
{
const copyofcats = [...cats, "Broom"];
return copyofcats 
};

function prependCat(name) 
{
const copyofcats = [...cats];
copyofcats.unshift ("Arnold")

return copyofcats

};

function removeLastCat(name)
{
const copyofcats= [...cats];
copyofcats.pop ("Garfield")
return copyofcats   

};

function removeFirstCat(name)
{
const copyofcats=[...cats];
copyofcats.shift ("Otis")
return copyofcats

};