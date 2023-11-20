let inbut = document.querySelector("input");
let btn = document.querySelector(".get-repos");
let data = document.querySelector(".data");

btn.onclick = function () {
  getRepos();
};
function getRepos() {
  if (inbut.value == "") {
    data.innerHTML = "<span>Please Write GitHUb Username</span>";
  } else {
    fetch(`https://api.github.com/users/${inbut.value}/repos`)
      .then((response) => response.json())

      .then((repositories) => {
        data.innerHTML = "";
        repositories.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);
          data.appendChild(mainDiv);
          let theUrl = document.createElement("a");
          let url = document.createTextNode("visit");
          theUrl.appendChild(url);
          theUrl.href = `https://github.com/${inbut.value}/${repo.name}`;
          theUrl.setAttribute("target", "_blank");
          mainDiv.appendChild(theUrl);
          let starspan = document.createElement("span");
          let stars = document.createTextNode(`${repo.stargazers_count} Stars`);
          starspan.appendChild(stars);
          mainDiv.appendChild(starspan);
          mainDiv.className = "repo-box";
          data.appendChild(mainDiv);
        });
      });
  }
}
