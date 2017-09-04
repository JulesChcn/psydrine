$(document).ready(function () {
    $("#nutrition").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Nutrition').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Nutrition Blibalaouaodaodaodu" : 'Nutrition Blibalaouaodaodaodu').fadeIn();
        })
    });
    $("#relation").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Relation').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Relation Blibalaouaodaodaodu" : 'Relation Blibalaouaodaodaodu').fadeIn();
        })
    });
    $("#bodyhealth").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Body-Health').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Bodyyyyyy Blibalaouaodaodaodu" : 'Relation Blibalaouaodaodaodu').fadeIn();
        })
    });
    $("#selfesteem").click(function () {
        $("#switchtitle").fadeOut(function () {
            $("#switchtitle").text(($("#switchtitle").text() == "Je m'appelle Sandrine") ? "Je m'appelle Sandrine" : 'Self-Esteem').fadeIn();
        })
        $("#switchparag").fadeOut(function () {
            $("#switchparag").text(($("#switchparag").text() != "Je m'appelle Sandrine") ? "Self esteeeeemmm Blibalaouaodaodaodu" : 'Relation Blibalaouaodaodaodu').fadeIn();
        })
    });
  });


