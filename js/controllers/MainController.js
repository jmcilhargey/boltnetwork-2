app.controller("MainController", ["$scope", function($scope) {
  $scope.programs = [
    {
    series: "Sherlock",
    series_img: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-2/img/sherlock.jpg",
    genre: "Crime Drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2015, 10, 29, 20, 00, 00, 00)
    },
    {
    series: "Arrested Development",
    series_img: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-2/img/arrested_development.jpg",
    genre: "Comedy Sitcom",
    season: 2,
    episode: "Righteous Brothers",
    description: "Michael thinks it's time for George Sr. to leave the attic where he's been hiding as a fugitive. George-Michael helps his girlfriend Ann stage a protest against the American remake of the movie Dangerous Cousins, which turns out to be a big hit for Maeby. Tobias falls for Kitty, and learns that his cease and desist with the Blue Man Group has been lifted, and they ask Tobias to come to Las Vegas for an audition.",
    datetime: new Date(2015, 10, 30, 23, 00, 00, 00)
    },
    {
    series: "Game of Thrones",
    series_img: "http://www.aumethodists.org/wp-content/uploads/2013/09/game-of-thrones-season-4-1.jpg",
    genre: "Fantasy Drama",
    season: 1,
    episode: "The Wolf and the Lion",
    description: "Tyrion's predicament becomes common knowledge in King's Landing, making life difficult for Eddard Stark. Ned's position is already precarious due to a disagreement with King Robert Baratheon over plans to assassinate Daenerys before she can rally the Dothraki to invade Westeros. In the Eyrie, Catelyn is shocked by her sister Lysa's paranoia and distrust.",
    datetime: new Date(2015, 11, 01, 22, 00, 00, 00)
    }
  ];
}]);