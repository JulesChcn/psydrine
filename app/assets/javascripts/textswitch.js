$(document).ready(function boom () {
    $("#nutrition").click(function() {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Nutrition').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Nutrition test pour texte axe apprentissage" : "Nutrition test pour texte axe apprentissage").fadeIn();
        })
    });
    $("#relation").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Relation').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Relation test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
    });
    $("#bodyhealth").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Body-Health').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Bodyyyyyy test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
    });
    $("#selfesteem").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Self-Esteem').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Self esteem test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
    });
  });

    // setTimeout(boom, 20);

