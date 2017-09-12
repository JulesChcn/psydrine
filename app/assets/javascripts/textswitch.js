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
setTimeout(boom, 2000);
  });
