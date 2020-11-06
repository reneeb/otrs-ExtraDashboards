// --
// Copyright (c) 2020 https://www.perl-services.de
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";


Core.App.Ready( function() {
    var Queries = {};
    $.each(document.location.search.substr(1).split(/&|;/),function(c,q){
      var i = q.split('=');
      Queries[i[0].toString()] = i[1].toString();
    });

    var Dashboard = Queries.Dashboard || '';
    $('.WidgetAction.Close').each( function() {
        var Link = $(this).find('a').attr('href');
        $(this).find('a').attr('href', Link + "Dashboard=" + Dashboard);
    });
});

