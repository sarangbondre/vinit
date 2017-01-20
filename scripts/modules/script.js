/*
 * Copyright Shorif Ali (http://github.com/shorifali/)
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 *
 */

'use strict';

$(document).ready(function() {

    // Default option
    var option = '<option value="0" selected="selected">Select Option</option>';

    // Method to clear dropdowns down to a given level
    var clearDropDown = function(arrayObj, startIndex) {
        $.each(arrayObj, function(index, value) {
            if(index >= startIndex) {
                $(value).html(option);
            }
        });
    };

    // Method to disable dropdowns down to a given level
    var disableDropDown = function(arrayObj, startIndex) {
        $.each(arrayObj, function(index, value) {
            if(index >= startIndex) {
                $(value).attr('disabled', 'disabled');
            }
        });
    };

    // Method to disable dropdowns down to a given level
    var enableDropDown = function(that) {
        that.removeAttr('disabled');
    };

    // Method to generate and append options
    var generateOptions = function(element, selection, limit) {
        // console.log(element+" "+selection+" "+limit);
        var options = '';
        var thirdoptions = '';
        // console.log(options);
        // for(var i = 1; i <= limit; i++) {
        //     options += '<option value="' + i + '">Option ' + selection + '-' + i + '</option>';
        // }
        if(selection == 1) {
            options = '<option value="Cold Visit">Cold Visit</option>';
            options += '<option value="Lead follow-up">Lead follow-up</option>';
            options += '<option value="CCRS follow-up">CCRS follow-up</option>';
            options += '<option value="Site demo">Site demo</option>';

            thirdoptions = '<option value="Lead Generated">Lead Generated</option>';
            thirdoptions += '<option value="Demo given">Demo given</option>';
            thirdoptions += '<option value="Tech explanation">Tech explanation</option>';
            thirdoptions += '<option value="Follow-up requested">Follow-up requested</option>';
            thirdoptions += '<option value="Conversion">Conversion</option>';
        }
        if(selection == 2) {
            options = '<option value="Lead follow-up">Lead follow-up</option>';
            options += '<option value="CCRS follow-up">CCRS follow-up</option>';
            options += '<option value="SO tech request">SO tech request</option>';

            thirdoptions = '<option value="Lead Generated">Lead Generated</option>';
            thirdoptions += '<option value="Follow-up requested">Follow-up requested</option>';
            thirdoptions += '<option value="CCRS details taken">CCRS details taken</option>';
        }
        if(selection == 3) {
            options = '<option value="Casual visit">Casual visit</option>';
            options += '<option value="follow-up meet">follow-up meet</option>';
            options += '<option value="So tech request">So tech request</option>';

            thirdoptions = '<option value="Lead Generated">Lead Generated</option>';
            thirdoptions += '<option value="Tech explanation">Tech explanation</option>';
            thirdoptions += '<option value="Follow-up requested">Follow-up requested</option>';
            thirdoptions += '<option value="No output">No output</option>';
        }
        if(selection == 4) {
            options = '<option value="Contractor Meet">Contractor Meet</option>';
            options += '<option value="Engg Meet">Engg Meet</option>';
            options += '<option value="Mason Meet">Mason Meet</option>';
            options += '<option value="Counter Meet">Counter Meet</option>';
            options += '<option value="IHB meet">IHB meet</option>';

            // thirdoptions += '<option value="Cold">Cold</option>';
        }
        if(selection == 5) {
            options = '<option value="Engineer">Engineer</option>';
            options += '<option value="Contractor">Contractor</option>';
            options += '<option value="Mason">Mason</option>';
            options += '<option value="Dealer">Dealer</option>';
            options += '<option value="Sub-dealer">Sub-dealer</option>';

            thirdoptions = '<option value="Lead Generated">Lead Generated</option>';
            thirdoptions += '<option value="Demo given">Demo given</option>';
            thirdoptions += '<option value="Tech explanation">Tech explanation</option>';
            thirdoptions += '<option value="Follow-up requested">Follow-up requested</option>';
        }
        element.append(options);

        thirdDropDown.append(thirdoptions);
    };

    //Select each of the dropdowns
    var firstDropDown = $('#first');
    var secondDropDown = $('#second');
    var thirdDropDown = $('#third');

    // Hold selected option
    var firstSelection = '';
    var secondSelection = '';
    var thirdSelection = '';

    // Hold selection
    var selection = '';

    // Selection handler for first level dropdown
    firstDropDown.on('change', function() {

        // Get selected option
        firstSelection = firstDropDown.val();

        // Clear all dropdowns down to the hierarchy
        clearDropDown($('select'), 2);
        clearDropDown($('select'), 3);

        // Disable all dropdowns down to the hierarchy
        // disableDropDown($('select'), 1);

        // Check current selection
        if(firstSelection === '0') {
            return;
        }

        // Enable second level DropDown
        enableDropDown(secondDropDown);
        enableDropDown(thirdDropDown);

        // Generate and append options
        selection = firstSelection;
        generateOptions(secondDropDown, selection, 4);
        // generateOptions(thirdDropDown, selection, 4);
    });

    // Selection handler for second level dropdown
    // secondDropDown.on('change', function() {
    //     secondSelection = secondDropDown.val();

    //     // Clear all dropdowns down to the hierarchy
    //     clearDropDown($('select'), 2);

    //     // Disable all dropdowns down to the hierarchy
    //     disableDropDown($('select'), 2);

    //     // Check current selection
    //     if(secondSelection === '0') {
    //          return;
    //     }

    //     // Enable third level DropDown
    //     enableDropDown(thirdDropDown);

    //     // Generate and append options
    //     selection = firstSelection + '-' + secondSelection;
    //     generateOptions(thirdDropDown, selection, 4);
    // });

    // Selection handler for third level dropdown
    // thirdDropDown.on('change', function() {
    //     thirdSelection = thirdDropDown.val();

    //     console.log(thirdSelection);
    //     // Final work goes here

    //  });

    /*
     * In this way we can make any number of dependent dropdowns
     *
     */

});
