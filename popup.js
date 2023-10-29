// Attend que le document soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
    // Récupère l'élément HTML de la case à cocher "Mettre en gras"
    const boldTextCheckbox = document.getElementById("boldText");
  
    // Récupère l'élément HTML du bouton "Appliquer"
    const applyFontButton = document.getElementById("applyFont");
  
    // Associe un gestionnaire d'événements au clic sur le bouton "Appliquer"
    applyFontButton.addEventListener("click", function() {
      // Récupère la police sélectionnée dans le menu déroulant
      const selectedFont = fontSelector.value;
  
      // Vérifie si la case à cocher "Mettre en gras" est cochée
      const isBold = boldTextCheckbox.checked;
  
      // Définit le style du texte en fonction de l'état de la case à cocher
      const style = isBold ? "bold" : "normal";
  
      // Compose la propriété CSS qui inclut la police et le style gras (ou normal)
      const font = selectedFont + "; font-weight: " + style;
  
      // Récupère les onglets actifs dans la fenêtre courante
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Envoie un message au script de contenu (dys.js) dans l'onglet actif
        // pour appliquer la police avec ou sans style gras
        chrome.tabs.sendMessage(tabs[0].id, { selectedFont: font });
      });
    });
  });