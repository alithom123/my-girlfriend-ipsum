$(document).ready(function () {

    function generateIpsum(paragraphCount, sentenceCount) {

        console.log(`running generateIpsum`);
        $.getJSON("sentences.json",

            function (data) {
                var arr = _.shuffle(data);
                var output = '';
                for (var p = 0; p < paragraphCount; p++) {
                    var firstSentences = _.first(arr, sentenceCount);
                    arr = _.rest(arr, sentenceCount);
                    output = output + "<p>" + firstSentences.join(" ") + "</p>";
                }
                $('#text').html(output);
            });

    }

    function toggleIpsum(selector, paragraphCount, sentenceCount) {
        console.log(`running toggleIpsum`);
        $(selector).on('click', function () {
            generateIpsum(paragraphCount, sentenceCount);
        })
    }

    toggleIpsum('#reload', 8, 8);
    generateIpsum(8, 8);

});