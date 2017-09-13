

$(document).ready(function boom () {
    $("#nutrition").click(function() {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Nutrition').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Nutrition test pour texte axe apprentissage" : "Nutrition test pour texte axe apprentissage").fadeIn();
        })
        $("#relation, #bodyhealth, #selfesteem").addClass("blur");
          $("#nutrition").removeClass("blur");
          $('#relation, #bodyhealth, #selfesteem').removeClass("unblur");
          $("#nutrition").addClass("unblur");
        });
    $("#relation").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Relation').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Relation test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
        $("#nutrition, #bodyhealth, #selfesteem").addClass("blur");
          $("#relation").removeClass("blur");
          $('#nutrition, #bodyhealth, #selfesteem').removeClass("unblur");
          $("#relation").addClass("unblur");
        });
    $("#bodyhealth").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Body-Health').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Bodyyyyyy test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
        $("#nutrition, #relation, #selfesteem").addClass("blur");
          $("#bodyhealth").removeClass("blur");
          $('#nutrition, #relation, #selfesteem').removeClass("unblur");
          $("#bodyhealth").addClass("unblur");
    });
    $("#selfesteem").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Self-Esteem').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Self esteem test pour texte axe apprentissage" : 'Relation test pour texte axe apprentissage').fadeIn();
        })
       $("#nutrition, #relation, #bodyhealth").addClass("blur");
          $("#selfesteem").removeClass("blur");
          $('#nutrition, #relation, #bodyhealth').removeClass("unblur");
          $("#selfesteem").addClass("unblur");
    });
    $("#avatar1").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : "Je m'appelle Sandrine").fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "J'ai suivi la formation de psychanalyste/psychothérapeute intégratif à la Nouvelle Faculté Libre à Paris. J'ai donc une approche dite Intégrative fondée sur la phénoménologie et l existentialisme une approche dite humaniste-existentielle. La thérapie que je propose consiste à consolider la capacité de chacun à exprimer ses difficultés, repérer ses blocages, ce qui nous empêche de vivre librement en trouvant ses propres solutions en développant des changements qui nous permettent de faire nos choix, vos choix." : 'Relation test pour texte axe apprentissage').fadeIn();
        })
       $("#nutrition, #relation, #bodyhealth, #selfesteem").addClass("blur");
          $('#nutrition, #relation, #bodyhealth, #selfesteem').removeClass("unblur");
    });
  });

