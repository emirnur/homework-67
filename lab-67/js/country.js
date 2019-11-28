const indexLink = "https://restcountries.eu/rest/v2/alpha/";

function getUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var param = urlParams.get('code');
    return indexLink + param + "?fields=name;alpha3Code;capital;region;population";
}

function renderData(data) {
    const container = $('.container');   
    let countryDiv = $(document.createElement('div'));
    countryDiv.addClass('country');
    countryDiv.text('Название страны')
    let countryText = $(document.createElement('p'));
    countryText.text(data['name']);
    container.append(countryDiv);
    countryDiv.append(countryText);
    let countryDiv1 = $(document.createElement('div'));
    countryDiv1.addClass('country');
    countryDiv1.text('Столица')
    let countryText1 = $(document.createElement('p'));
    countryText1.text(data['capital']);
    container.append(countryDiv1);
    countryDiv1.append(countryText1);
    let countryDiv2 = $(document.createElement('div'));
    countryDiv2.addClass('country');
    countryDiv2.text('Код')
    let countryText2 = $(document.createElement('p'));
    countryText2.text(data['alpha3Code']);
    container.append(countryDiv2);
    countryDiv2.append(countryText2);
    let countryDiv3 = $(document.createElement('div'));
    countryDiv3.addClass('country');
    countryDiv3.text('Регион')
    let countryText3 = $(document.createElement('p'));
    countryText3.text(data['region']);
    container.append(countryDiv3);
    countryDiv3.append(countryText3);
    let countryDiv4 = $(document.createElement('div'));
    countryDiv4.addClass('country');
    countryDiv4.text('Население')
    let countryText4 = $(document.createElement('p'));
    countryText4.text(data['population']);
    container.append(countryDiv4);
    countryDiv4.append(countryText4);    
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadIndex() {
    $.ajax({
        url: getUrl(),
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    jqueryLoadIndex();
});
