(function(){
    var pages = document.getElementsByTagName('page');
    var pageProgress = document.getElementById("page-progress");
    var currentPage = 0;
    var endPage = pages.length - 1;

    // init page progress
    pageProgress.value = currentPage;
    pageProgress.max = endPage;
    // ----------------------------

    var hideAllPages = function(){
        for(var i = 0; i < pages.length; i++){
            pages[i].style.visibility = 'hidden';
        }
    }

    var showPage = function(n){
        hideAllPages();
        pages[n].style.visibility = 'visible';

        // update page progress
        pageProgress.value = n;
        // --------------------
    }

    // main
    showPage(currentPage);
    document.body.addEventListener("keyup", function(e){
        // l = keyCode 76 = next
        if(e.keyCode === 76){
            if(currentPage < endPage) currentPage += 1;
            showPage(currentPage);
        }

        // h = keyCode 72 = prev 
        if(e.keyCode === 72){
            if(currentPage > 0) currentPage -= 1;
            showPage(currentPage);
        }
    });
})();
