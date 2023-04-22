function rendu_glouton(Arendre){
    if (Arendre>=billet[i]){
        Arendre-=billet[i];
        rendu[y]=billet[i];
        y++;
        rendu_glouton(Arendre);
    }
    if (Arendre<billet[i]){
        i++;
        rendu_glouton(Arendre);
    }
    else{
        return rendu;
    }
}


var billet=[100,50,20,10,5,2,1];
let i=0;
let y=0;
var rendu=[];
rendu_glouton(87);