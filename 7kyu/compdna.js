function DNAStrand(dna) {
    let newStr = "";

    for (let i = 0; i < dna.length; i++) {
        let letter = dna[i];

        if (letter === "A") {
            newStr += "T";
        } else if (letter === "T") {
            newStr += "A";
        } else if (letter === "C") {
            newStr += "G";
        } else if (letter === "G") {
            newStr += "C";
        }
    }

    return newStr;
}