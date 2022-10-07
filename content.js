window.onload = ()=>{
    var mutationObserver=new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(mutation.target && mutation.target.innerText && mutation.target.innerText.indexOf('Skip Ad')!=-1){
                mutation.target.click();
            }
        })
    });
    mutationObserver.observe(document.body,{attributes:true, subtree:true, childList:true, characterData:true});
}