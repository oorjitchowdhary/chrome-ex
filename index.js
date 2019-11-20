    function convertCode(){
        let pythonText = document.getElementById('python-code').value;

            let rep = pythonText.replace(/if/g, "agar");
            let rep1 = rep.replace(/==/g, "barabar");
            let rep2 = rep1.replace(/print/g, "bhaiyo aur behno");
            let rep3 = rep2.replace(/else:/g, "nahi toh\n");
            let rep4 = rep3.replace(/and/g, "&&");
            let rep5 = rep4.replace(/or/g, "||");
            let rep6 = rep5.replace(/%/g, " mod ");
            let rep7 = rep6.replace(/True/g, "sach");
            let rep8 = rep7.replace(/False/g, "jhoot");
            let rep9 = rep8.replace(/\(/g, " ");
            let rep10 = rep9.replace(/\)/g, "");
            let rep11 = rep10.replace(/:/g, "\n");

            let finalCode = "Mitrooon\n" + rep11 + "\nAcche din aa gaye";
            document.getElementById('modi-code').innerHTML = finalCode;

    }