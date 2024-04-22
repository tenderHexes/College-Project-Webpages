// montre et append les message d'erreurs
var styleElement = document.createElement('style');
document.head.appendChild(styleElement);

// mets en rouge le messsage d'erreur et en dessous des champs 
styleElement.sheet.insertRule('.error-message { color: red; font-size: 12px; display: block; margin-top: 5px; }', 0);



// access au champs
document.getElementById('acheter').addEventListener('click', function(event) {
    var nom = document.getElementById('nomInput').value;
    var telephone = document.getElementById('telephoneInput').value;
    var courriel = document.getElementById('courrielInput').value;
    var commentaire = document.getElementById('commentaireTextarea').value;


//////////////////////////application de la fonction message d'erreur/////////////////////////////////

    validateAndDisplayError('nomInput', isValidName(nom), 'nom');
    validateAndDisplayError('telephoneInput', isValidPhoneNumber(telephone), 'telephone');
    validateAndDisplayError('courrielInput', isValidEmail(courriel), 'courriel');
    validateAndDisplayError('commentaireTextarea', isValidCommentaire(commentaire), 'commentaire');

//////////////////////verifie si tout les champs sont valide/////////////////////////////////

    var nomError = document.querySelector('.nom-error').textContent;
    var telephoneError = document.querySelector('.telephone-error').textContent;
    var courrielError = document.querySelector('.courriel-error').textContent;
    var commentaireError = document.querySelector('.commentaire-error').textContent;

/////////////////////////////application de l'alert avec les checkbox et radio buttons//////////////////////////////////////////

    if (nomError === '' && telephoneError === '' && courrielError === '' && commentaireError === '') {
        var message = '';

        if (document.getElementById('nomCheckbox').checked) {
            message += 'Nom: ' + nom + '\n';
        }
        if (document.getElementById('telephoneCheckbox').checked) {
            message += 'Numéro de Téléphone: ' + telephone + '\n';
        }
        if (document.getElementById('courrielCheckbox').checked) {
            message += 'Courriel: ' + courriel + '\n';
        }

         if (document.getElementById('placesCheckbox').checked) {
            var placesSelect = document.getElementById('placesSelect');
            message += 'Nombre de places: ' + placesSelect.options[placesSelect.selectedIndex].value + '\n';
        }
        
        if (document.getElementById('commentaireCheckbox').checked) {
            message += 'Commentaire: ' + commentaire + '\n';
        }
       

        if (message.trim() !== '') {
            window.alert(message);
        }
    } else {
        event.preventDefault();
    }
})


//////////////////////////fonction message d'erreur: pour montrer le message d'erreur et la validation///////////////////////////////

function validateAndDisplayError(inputId, isValid, fieldName) {
    var errorMessage = document.querySelector('.' + fieldName + '-error');
    errorMessage.textContent = '';
    if (!isValid) {
        errorMessage.textContent = 'Veuillez entrer un ' + fieldName + ' valide.';
        document.getElementById(inputId).classList.add('error');
    } else {
        document.getElementById(inputId).classList.remove('error');
    }
}


//////////////////////////fonctions pour le formatage////////////////////////////////

function isValidName(name) {
    // format: lettres majuscule ou minuscule et espaces 
    return /^[a-zA-Z\s]+$/.test(name);
}

function isValidPhoneNumber(phoneNumber) {
    // format: +1(XXX) XXX-XXXX
    return /^\+1\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}

function isValidEmail(email) {
    // format: chaine contenant @.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidCommentaire(commentaire) {
    // au moin 1 caractere
    return commentaire.trim().length > 0;
}
