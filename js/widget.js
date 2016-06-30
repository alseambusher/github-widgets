BASE_URL = "https://api.github.com"
function get_user_repos(user, callback){
  $.get(BASE_URL + "/users/" + user + "/repos?per_page=100", function(data){
    callback(data);
  });
}

function build_widgets(){

}

function test(){
  get_user_repos("alseambusher", function(data){
    console.log(data);
  });
}
test();
