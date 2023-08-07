// JavaScript Final Assessment

// Create an array to store all of oue NFTs.

const NFTs = [];

// Create a function to simulate minting of NFTs => Create a function that creates NFT object.

const mintNFT = function (_name, _eyeColor, _shirtType, _bling) {
  const NFT = {
    name: _name,
    eyeColor: _eyeColor,
    shirtType: _shirtType,
    bling: _bling,
  };

  NFTs.push(NFT);

  console.log(`Yeahhhh. Your NFT has been minted successfully : ${NFT.name}\n`);
};

// Create a function to print all of our NFTs by looping through the array

const printNFTs = function () {
  console.log(`All the NFTs as requested`);

  for (let i = 0; i < NFTs.length; i++) {
    console.log(`\nID : ${i + 1}`);
    console.log(`Name : ${NFTs[i].name}`);
    console.log(`Eye Color : ${NFTs[i].eyeColor}`);
    console.log(`Shirt Color : ${NFTs[i].shirtType}`);
    console.log(`Bling : ${NFTs[i].bling}`);
  }

  console.log(`\nFinished printing all the NFTs`);
};

// Create a function to print the total number of minted NFTs

const totalNFTs = function () {
  console.log(`\nTotal number of NFTs : ${NFTs.length}`);
};

mintNFT("NFT 1", "Blue", "T-shirt", "Silver Chain");
mintNFT("NFT 2", "Blue", "Hoodie", "Bronze Chain");
mintNFT("NFT 3", "Brown", "Shirt", "Gold Chain");
mintNFT("NFT 4", "Green", "Hoodie", "Titanium Chain");
mintNFT("NFT 5", "Brown", "Hoodie", "Silver Chain");

printNFTs();
totalNFTs();
